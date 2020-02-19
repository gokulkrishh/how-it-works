---
path: "/javascript/promise.all"
published: true
date: "2020-02-18"
title: "Promise.all"
---

[Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) method returns a single Promise.

<b>Resolves</b>:

1. Promises that will be fulfilled after sometime (Eg: <b>API which fulfills after 10 seconds</b>)
1. Promises that have been fulfilled already (Eg: <b>API which fulfils before even passing to .all()</b>)
1. Non-promises based functions, variables etc, (Eg: <b>Function which returns a value</b>)

<b>Rejects</b>:

1. If there is an error in any of passed items to <b>.all()</b> method, <b>promise.all</b> will be <b>rejected</b>.

Lets see how it works.

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
var myPromises = Promise.all([promise1, promise2, sum(1, 2), undefined, null, 1]);

/* .then() from promise.all() */
myPromises
.then(res => console.log('resolved: ', res)) // resolved: ["After 2000 milliseconds", {data: {...}}, 3, undefined, null, 1]
.catch(err => console.log('rejected: ', err));
```

Now that we understood how <b>promise.all()</b> works. Lets write a custom <b>promise.all()</b> function to understand how it works.

```javascript
/* Promise.all() custom function */
function promiseAll(promises) {
  /* To keep the result of resolved promises */
  var result = Array(promises.length);

  /* To keep track of how many promise got resolved */
  var counter = 0;

  /* To resolve when all promises fulfilled */
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(item => {
        /* Add the resolved promise to same order as its given */
        result.splice(index, 1, item);
        counter += 1; // Update counter

        /* If counter is equal to promises.length then all promises are fulfilled */
        if (counter === promises.length) {
          resolve(result); // Resolved and return the result
        }
      })
      .catch(err => {
        reject(err); // If there is error, reject it immediately
      });
    });
  });
}
```