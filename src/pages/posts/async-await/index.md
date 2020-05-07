---
path: "/posts/async-await"
published: true
date: "2020-05-05"
title: "Async await"
description: "Async await is a new way to write asynchronous code in javascript."
---

A while ago, we used **promises** and **callbacks** to handle the **asynchronous code** in javascript. While working with **promises** and **callbacks** you might have heard a term called **callback hell**. In simple terms, it happens when our code has too many nested **callbacks**. And somebody like myself got frustrated and [created a site](http://callbackhell.com/) to explain it.

To solve the callback hell, a new feature was introduced in **ECMAScript 8** (2017) called `async await`. Async await is a new way to write **asynchronous code** in **javascript**.

So **what is async** and **what is await**?

#### 1. async:

- Make any javascript function as `async function` by adding async keyword in **front of it**.
- When an `async` function is called, it returns a **promise**.
- **Throwing exception** in async function is equal to **rejecting** a promise.
- Exceptions can be caught with `try/catch` statements or with normal `.catch` method like promise.

**Example**:

```js{numberLines: true}{111}
// Simple async function
async function sayHello(say) {
  return "hello";
}

// To handle success
sayHello().then(console.log); // logs "hello"

// To handle rejection
sayHello().catch(console.log); // logs error
```

#### 2. await:

- `await` keyword can only be used inside `async` function.
- Allow us to **synchronously wait** on a **async functions** (promise).
- Allow us to work with promises with **less boilerplate** code.
- We can also use it with **try/catch/finally** statement to handle error etc,.

**Example**:

```js{numberLines: true}{111}
// Async function to fetch get API
async function fetchPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    console.log(await response.json());
  } catch (error) {
    // code to handle error
  } finally {
    // some code
  }
}

// Fetch pokemon
fetchPokemon();
```

Lets see the same example using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API.

**Example**:

```js{numberLines: true}{111}
function fetchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
}

// Fetch pokemon
fetchPokemon();
```

Above code is simplified one to explain the differences. Check the below gif which explains it in 7 seconds.

https://twitter.com/manekinekko/status/855824609299636230

**Fun fact:**

> Async await is a syntactic sugar built on top of promises.
