---
path: "/posts/async-await"
published: true
date: "2020-05-05"
title: "Async await"
description: "Async await is new way to write asynchronous code in modern javascript."
---

Async await is new way to write **asynchronous code** in **modern javascript**. Before async await, only ways to make a **asynchronous** code is via **promises** and **callbacks**.

Lets see an example by making a network request via [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API.

**Few points to remember about fetch:**

- An **URL** is a must for fetch API.
- Fetch API returns a **promise** with the [response](https://fetch.spec.whatwg.org/#response-class) object.
- Then we attach **then** or **catch** callback to handle it.

**Example**:

```js{numberLines: true}{5,6,7}
function fetchPikachu(pokemonName = "") {
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  fetch(pokemonUrl)
    .then(res => res.json())
    .then(res => {})
    .catch(error => {});
}

fetchPikachu("pikachu");
```
