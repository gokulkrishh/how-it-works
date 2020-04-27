---
path: "/posts/event-loop"
published: true
date: "2020-04-28"
title: "Event Loop"
description: "Event loop in javascript is a concurrent model which is responsible for executing the code."
---

**Event loop** in javascript is a **concurrent model** which is responsible for executing the code. Javascript runtime is **single-threaded** meaning it can **execute one piece of code at a time**.

**I/O operations** such as **HTTP requests**, **disk read/write** are **non-blocking** in javascript. The **javascript runtime** will execute the operation providing a **callback function** and move on to the **next operation** and so on.

#### Javascript runtime consists of:

- **Call stack** - Execute the code one at a time.
- **Event loop** - Check if call stack is empty if so pull the callback from queue and add it to stack.
- **Callback queue** - Callbacks are pushed into the callback queue.
- **Web API's** - Talk to the browser via javascript.

**Illustration of javascript runtime**:

<img src="./event-loop.png" alt="Javascript runtime illustration" />
<i class="image__illustration">(Illustration of js runtime)</i>

### Call Stack:

Call stack in javascript can do **one only thing at time**. Call stack is simple **stack** (**LIFO**) based **data structure** which executes by pushing code on **top of the stack** and **popping it off** from the top once execution is done.

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

#### Demo:

<div class="demo-iframe">
<i style="color: #000;display: block;">Close the modal dialogue and click save + run button</i>
<iframe src="https://latentflip.com/loupe/?code=ZnVuY3Rpb24gZm9vKCkgewogIGNvbnNvbGUubG9nKCJmb28iKTsKfQoKZnVuY3Rpb24gYmF6KCkgewogIGZvbygpOwoKICBjb25zb2xlLmxvZygiYmF6Iik7Cn0KCmNvbnNvbGUubG9nKCJvdXRzaWRlIik7CgpiYXooKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D">

</iframe>
<a target="_blank" href="https://latentflip.com/loupe/?code=ZnVuY3Rpb24gZm9vKCkgewogIGNvbnNvbGUubG9nKCJmb28iKTsKfQoKZnVuY3Rpb24gYmF6KCkgewogIGZvbygpOwoKICBjb25zb2xlLmxvZygiYmF6Iik7Cn0KCmNvbnNvbGUubG9nKCJvdXRzaWRlIik7CgpiYXooKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D"><i class="image__illustration">(Call stack demo)</i></a>
</div>

**Explanation of code execution:**

1. Add `console.log('outside')` to **top** of the stack and **execute** and **pop it off**.
1. Add `baz()` function call to **top** of the stack and **execute** it.
1. Add `foo()` function call to **top** of the stack and **execute** it.
1. Add `console.log("foo")` to **top** of the stack and **execute** it and **pop it off**.
1. Then **pop** `foo()` function from the stack.
1. Add `console.log("baz")` to **top** of the stack and **execute** and **pop it off**.
1. Then **pop** `baz()` function from the stack.

### Event loop:

The event loop's job is quite simple, constantly check if the call stack is empty or not. If empty then pull the callback from the callback queue and put it on top the stack for execution.

### Callback queue:

Callback queue is a simple queue-based data structure (**FIFO**). This is where all asynchronous code is getting pushed to. From here event loop will take over and push the queue to call stack.

Callback queue is the reason that I/O events are non-blocking.

### Web API's:

Web API's also known as **Browser Object Model** (BOM) is the API's that allows javascript **to talk** to **web browsers**.

**Some web API's**:

- Window object
- Window location
- Navigator (information about user's browser)
- Cookies
- Timing Events such as setTimeout, setInterval, etc,

Let us see an example of how web API works in the event loop. If you are a javascript developer I am sure you would have used setTimeout or setInterval.
So let's take that as an example.

```js{numberLines: true}{8,2-4,7}
function foo() {
  setTimeout(function() {
    console.log("foo");
  }, 2000);
}

foo();
```

#### Demo:

<div class="demo-iframe">
<i style="color: #000;display: block;">Close the modal dialogue and click save + run button</i>
<iframe src="https://latentflip.com/loupe/?code=ZnVuY3Rpb24gZm9vKCkgewogIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICBjb25zb2xlLmxvZygiZm9vIik7CiAgfSwgMjAwMCk7Cn0KCmZvbygpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D">

</iframe>
<a target="_blank" href="https://latentflip.com/loupe/?code=ZnVuY3Rpb24gZm9vKCkgewogIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7CiAgICBjb25zb2xlLmxvZygiZm9vIik7CiAgfSwgMjAwMCk7Cn0KCmZvbygpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D"><i class="image__illustration">(setTimeout demo)</i></a>
</div>

**Explanation of code execution:**

1. Add `foo()` to **top** of the stack and **execute** it.
1. Add `setTimeout()` with callback to **top** of the stack and **execute** it and pop it off.
1. `Timer` will be keep track and executed inside the browser.
1. Add setTimeout `callback` to **callback queue**.
1. **Event loop** will pull the timer `callback` from **queue** and add to the `top of stack`.
1. Add `console.log()` to stack and **execute it** and **pop it off**.
1. Finally pop function `foo()` from the stack.

### Final note

I hope in this post you have learned a little bit more about javascript and its runtime. The examples I showed are more of an abstract idea of the event loop and browser vendors would have implemented the event loop with a lot of optimizations but you get the idea right how it works.

I want to thank [Philip Roberts](https://twitter.com/philip_roberts) for creating [loupe](http://latentflip.com/loupe) an awesome tool to visualize how event loops work.

Thanks for reading it so far. See ya in the next post.

#### References:

- [MDN EventLoop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [What the heck is event loop?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
