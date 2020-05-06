---
path: "/posts/async-await"
published: true
date: "2020-05-05"
title: "Async await"
description: "Async await is a new way to write asynchronous code in javascript."
---

Async await is a new way to write **asynchronous code** in **javascript**. Before async await, we had to use **promises** and **callbacks** to handle the asynchronous code.

If you have worked with **promises** and **callbacks** then you might have heard a term called **callback hell**. In simple terms, it happens when our code has too many nested **callbacks**. Apparently somebody like me got frustrated and created a [site](http://callbackhell.com/) to explain it.

Lets talk about async and await keywords.

#### 1. async keyword:

- When a `async` function is called, it returns a **promise**.
- **Throwing exception** in async function is equal to **rejecting** a promise.
- Exceptions can be caught with `try/catch` or using `.catch()` method as well.

**Example**:

```js{numberLines: true}{111}
async function sayHello(say) {
  if (say) {
    return "hello";
  } else {
    throw "Error occurred";
  }
}

// Returns a promise
sayHello();

// Fulfilled
sayHello(true).then(console.log); // logs "hello"

// Rejected
sayHello(false).catch(console.log); // logs "Error occurred"
```

#### 2. await keyword:

- `await` keyword can only be used inside `async` functions.
- Allow us to **synchronously wait** on a **async functions** (promise).
- Allow us to work with promises with less boilerplate code.
- We can also use it with **try/catch/finally** statement to handle error.

**Example**:

```js{numberLines: true}{111}
const showLoader = () => {};
const hideLoader = () => {};

async function fetchPokemon() {
  showLoader();

  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    console.log(await response.json());
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
}

// Fetch pokemon
fetchPokemon();
```

Lets see the same example just using promise based [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API.

**Example**:

```js{numberLines: true}{111}
const showLoader = () => {};
const hideLoader = () => {};

function fetchPokemon() {
  showLoader();

  fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(data);
      hideLoader();
    })
    .catch(error => {
      console.log(error);
      hideLoader();
    });
}

// Fetch pokemon
fetchPokemon();
```

👉🏻 **Fun fact:**

> Async await is a syntactic sugar built on top of promises.
