---
path: "/posts/event-loop"
published: true
date: "2020-04-28"
title: "Event Loop"
description: "Event loop in javascript is a concurrent model which is responsible for executing the code."
---

Javascript runtime is **single threaded** meaning it can **execute one piece of code at a time**. In order to not to block I/O operations, javascript has concurrent model called **Event loop**.

All `I/O` operations such as **HTTP requests**, **disk read/write** etc are **non-blocking** in javascript. The single thread will ask the **javascript runtime** to execute the operation providing a callback function and move on to next operation.

#### Javascript runtime consists of:

- **Call stack** - To execute the code one at a time.
- **Web API's** - Responsible to web api's like setTimeout, http requests etc,.
- **Event loop** - Check if call stack is empty if empty take the callback from callback queue and add it to stack.
- **Callback queue** - All callbacks are pushed into the callback queue.

**Illustration of javascript runtime**:

<img src="./event-loop.png" alt="Javascript runtime illustration" />
<i class="image__illustration">(Illustration of js runtime)</i>

### Call stack

Call stack in javascript can do **one only thing at time**. Call stack is simple **stack** based **data structure** which executes the code by **pushing code** on top of the stack and **popping it off** from the top once execution is done.

**Example**:

```js{numberLines: true}{2,6,8,11,13}
function foo() {
  console.log("foo");
}

function baz() {
  foo();

  console.log("baz");
}

console.log("outside");

baz();
```

**Output**:

```js
// 1. print outside
// 2. print foo
// 3. print baz
```

**Explanation:**

1. Add `console.log('outside')` to **top** of the stack and **execute** and **pop it off**.
1. Add `baz()` function call to **top** of the stack and **execute** it.
1. Add `foo()` function call to **top** of the stack and **execute** it.
1. Add `console.log("foo")` to **top** of the stack and **execute** it and **pop it off**.
1. Then **pop** `foo()` function from the stack.
1. Add `console.log("baz")` to **top** of the stack and **execute** and **pop it off**.
1. Then **pop** `baz()` function from the stack.

[Demo](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gZm9vKCkgewogIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZW91dENhbGxiYWNrKCkgewogICAgY29uc29sZS5sb2coImZvbyIpOwogIH0sIDEwMDApOwp9CgpmdW5jdGlvbiBiYXooKSB7CiAgZm9vKCk7CiAgY29uc29sZS5sb2coImJheiIpOwp9Cgpjb25zb2xlLmxvZygib3V0c2lkZSIpOwoKYmF6KCk7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

Wait a minute, if the call stack can execute only one thing at a time will it not block the main thread?. Not really, we will see more about it later in the post.
