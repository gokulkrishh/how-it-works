---
path: "/javascript/promise.all"
published: true
date: "2020-02-18"
title: "Promise.all"
---

[Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) method returns a single Promise.

<b>Will resolves when:</b>

1. Promises that will be fulfilled after sometime (Eg: <b>API which fulfills after 10 seconds</b>)
1. Promises that have been fulfilled already (Eg: <b>API which fulfils before even passing to .all()</b>)
1. Non-promises based functions, variables etc, (Eg: <b>Function which returns a value</b>)

<b>Will reject when</b>:

1. If there is an error in any of passed items to <b>.all()</b> method, <b>promise.all</b> will be <b>rejected</b>.

Let's see how it works.

```javascript
/* Wrapper function to simulate api */
function fakeAPI(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(`After ${delay} milliseconds`);
    }, delay);
  });
}
```

Above is fakeAPI method to create for our explanation.

```javascript
/* Fake api to get response after 2 seconds */
var promise1 = fakeAPI(2000);

/* Fake api to get response immediately */
var promise2 = fetch(`https://reqres.in/api/user/1`).then(res => res.json());

/* Just a normal function which returns immediately */
var sum = (a, b) => a + b;

/* Adding promise 1 to 4 to .all() method */
var myPromises = Promise.all([
  promise1,
  promise2,
  sum(1, 2),
  undefined,
  null,
  1,
]);

/* .then() from promise.all() */
myPromises
  .then(res => console.log("resolved: ", res)) // resolved: ["After 2000 milliseconds", {data: {...}}, 3, undefined, null, 1]
  .catch(err => console.log("rejected: ", err));
```

Now that we understood how <b>promise.all()</b> works. Lets write a custom <b>promise.all()</b> function to understand how it works.

We will write the custom function in 3 steps.

#### Step 1:

- we will create a function called <b>promiseAll</b>.
- Above function will have two variables called <b>result</b> (Array) and <b>counter</b> (Number).
- result variable is store the result of promises.
- counter variable is keep the count of how many promises resolved.
- finally, we will use `Promise` function to resolve and return once all of the given promises are settled.

```javascript
/* Promise.all() custom function */
function promiseAll(promises) {
  /* To keep the result of resolved promises */
  var result = Array(promises.length);

  /* To keep track of how many promise got resolved */
  var counter = 0;

  /* To resolve when all promises fulfilled */
  return new Promise((resolve, reject) => {});
}
```

The above piece of code is self-explanatory with the comments. We will skip explaining it.

#### Step 2:

We will iterate the given <b>promises</b> so that we can resolve attach <b>.then</b> to all the promises. Also we will pass the each item in <b>iteration</b> to `Promise.resolve()` so that we can even handle the non-promise items as well.

<b>Example:</b> If passed <b>promises</b> argument contains number, undefined or anything which are non-promise in nature.

Also, we will we adding <b>.then</b> and <b>.catch</b> methods to handle once the promise settles.

```javascript
function promiseAll(promises) {
  /* To keep the result of resolved promises */
  var result = Array(promises.length);

  /* To keep track of how many promise got resolved */
  var counter = 0;

  /* To resolve when all promises fulfilled */
  return new Promise((resolve, reject) => {
    // Iterating the given promises array
    promises.forEach((promise, index) => {
      // We need to resolve each item in promises so that even if there is non-promise item we can handle it
      Promise.resolve(promise)
        .then(item => {
          // Resolve and store in result
        })
        .catch(err => {
          // If there is error, reject it immediately and return the error
        });
    });
  });
}
```

#### Step 3:

We will be doing the following in our next step.

- Increment the counter.
- We will increment the counter and store the resolved item in respectively index of result variable.
- If the counter length is same as <b>promises</b> argument's length, then resolve the outer promise else we reject it and return the error.

```javascript
function promiseAll(promises) {
  /* To keep the result of resolved promises */
  var result = Array(promises.length);

  /* To keep track of how many promise got resolved */
  var counter = 0;

  /* To resolve when all promises fulfilled */
  return new Promise((resolve, reject) => {
    // Iterating the given promises array
    promises.forEach((promise, index) => {
      // We need to resolve each item in promises so that even if there is non-promise item we can handle it
      Promise.resolve(promise)
        .then(item => {
          counter += 1; // Update counter
          result[index] = item; // To update the item in result array in the same order as it comes

          /* If counter is equal to promises.length then all promises are fulfilled */
          if (counter === promises.length) {
            resolve(result); // Resolved and return the result
          }
        })
        .catch(err => {
          reject(err); // If there is error, reject it immediately and return the error
        });
    });
  });
}
```

Above piece of code may not be same as how browser vendors implemented <b>promise.all</b>, but you get the idea right?

I hope this post was useful and you learned something new. See you in my next post.
