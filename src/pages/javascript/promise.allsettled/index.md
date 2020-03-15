---
path: "/javascript/promise.allSettled"
published: true
date: "2020-03-15"
title: "Promise.allSettled"
---

<!-- <br /><img src="./promise.allSettled.png" alt="Promise.allSettled" /><br /> -->

**Promise.allSettled()** returns a promise when all array of promises passed to it are settled.

**👉🏻 Few points to remember**:

- Returns a promise that contains an `array of results`.
- Each `result` object will have two properties (**status** & **reason or value**).
- `status` will be **fulfilled** or **rejected**.
- `value` if **fulfilled** or a `reason` if **rejected**.

### Example:

```js
const promise1 = Promise.resolve(1); // Resolves immediately

const promise2 = new Promise((resolve, reject) => {
  // Reject after 2 seconds
  setTimeout(() => {
    reject("timeout rejected");
  }, 2000);
});

Promise.allSettled([promise1, promise2]).then(results => {
  results.forEach(result => {
    console.log(result);
    // {status: "fulfilled", value: 1}
    // {status: "rejected", reason: "timeout rejected"}
  });
});
```

Now we understand what `promise.allSettled()` does and what it returns, let's read the **TC39 specs** to understand its implementation details then we will implement it.

##### [Promise.allSettled()](https://tc39.es/proposal-promise-allSettled/) specification says

1. Accepts `iterable` object as a parameter.
1. If not iterable, throw an exception with a reason.

We will write a function to find out if the passed parameter is `iterable`.

After going through [the iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) protocol from MDN, I understood we can use [Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) to find out.

#### Code:

```js
function isIterable(iterator) {
  // If no argument is passed or === null
  if (arguments.length === 0 || iterator === null) {
    return false;
  }

  return typeof iterator[Symbol.iterator] === "function";
}

isIterable({}); // false
isIterable(1); // false
isIterable(nul); // false

isIterable([]); // true
isIterable(""); // true

// String, Array, TypedArray, Map & Set are all built-in iterables
```
