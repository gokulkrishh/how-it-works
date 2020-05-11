---
path: "/posts/async-await"
published: true
date: "2020-05-05"
title: "Async await"
description: "Async await is a new way to write asynchronous code in javascript."
---

<br /><img src="./async-await.png" alt="async await illustration" /><br />

A while ago, we used **promises** and **callbacks** to handle the **asynchronous code** in javascript. While working with **promises** and **callbacks** you might have heard a term called **callback hell**. In simple terms, it happens when our code has too many nested **callbacks**. And somebody like myself got frustrated and [created a site](http://callbackhell.com/) to explain it.

To solve the callback hell, a new feature was introduced in **ECMAScript 8** (2017) called `async await`. Async await is a new way to write **asynchronous code** in **javascript**.

So **what is async** and **what is await**?

#### 1. async:

- Make any javascript function as `async function` by adding the async keyword in **front of it**.
- When an `async` function is called, it returns a **promise**. If the returned value is not a promise, then `async` will **wrap it in promise** and **return it**.
- **Throwing exception** in async function is equal to **rejecting** a promise.
- Exceptions can be caught with `try/catch` statements or with normal `.catch`method like promise.

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

- `await` keyword can only be used inside `async` function, except for the [top-level await](https://v8.dev/features/top-level-await).
- Allow us to **synchronously wait** on an **async functions**.
- We can also use it with **try/catch/finally** statement to handle error etc,
- Allow us to work with promises with **less boilerplate** code.

**Example**:

```js{numberLines: true}{111}
async function fetchPokemon() {
  try {
    const pokemon1 = await fetch("https://pokeapi.co/api/v2/pokemon/1");
    const pokemon2 = await fetch("https://pokeapi.co/api/v2/pokemon/2");

    const response1 = await pokemon1.json();
    const response2 = await pokemon2.json();

    console.log(response1.name + " " + response2.name);
  } catch (error) {
    console.log(error);
  } finally {
    // some code
  }
}

fetchPokemon(); // logs "bulbasaur ivysaur"
```

Let's see the same example using promise based [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API.

**Example**:

```js{numberLines: true}{111}
function fetchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon/1")
    .then(response => {
      return response.json().then(response1 => {
        return fetch("https://pokeapi.co/api/v2/pokemon/1").then(response => {
          return response
            .json()
            .then(response2 => {
              console.log(response1.name + " " + response2.name);
            })
            .catch(error1 => {
              console.log(error1);
            });
        });
      });
    })
    .catch(error2 => {
      console.log(error2);
    });
}

// Fetch pokemon
fetchPokemon(); // logs "bulbasaur bulbasaur"
```

The above code works as expected but the disadvantage here is that it is **hard to debug** and becomes a ** non-readable code**. Async wait provides a way to write simpler async based code which is easy to **read** and **maintain**. Async await works as if the code were **synchronous**, but **without blocking** the main thread. Read my previous post to understand more about [main thread](/posts/event-loop).

**Check the below gif which explains async await in 7 seconds**:

https://twitter.com/manekinekko/status/855824609299636230

**Fun fact:**

<blockquote class="bq"> Async await is a syntactic sugar built on top of promises.</blockquote>

Now that we understood the basics of async await keywords. Let us see how it works. If you know javascript well then you might have already guessed that `await` in javascript calls `then()` method under the hood. If not its fine let me explain with code.

**Example:**

```js{numberLines: true}{111}
var customThenFunz = () => {
  return {
    then: (resolve, reject) => {
      resolve("hello"); // resolve & reject are promise callback's
    },
  };
};

console.log(await customThenFunz()); // logs "hello"
```

In the above example, await calls the `then()` method returned by the `customThenFunz` and logs `hello`. This the proof that await calls the `then()` method internally.

So far we talked about all the advantages of writing async code in async await. Now lets see some disadvantages of async await.

**Disadvantages**:

- We cannot do **multiple await** in the same line. There no way to run **multiple async** operations **simultaneously**. But the same can be done in normal promises using `promise.all()`.
- If you are supporting old browsers then babel will transpile and **bloat** the [code](https://babeljs.io/repl#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=IYZwngdgxgBAZgV2gFwJYHsLwKbKgCwAV0BrbAW0wAoBKGAbwCgYZkAnMB5lmKTEZDAAOpCphgBeGMADuwVILi4CVAET5kyISABcAej0iywIagB0fPSdR6AbgCZDoyhD0BGVTQDc3Fnwgg6AA22GZB6ADmVLLygkZiEGYAVoEQtN7cAL68wHj4MFTYbGzobHRMPLz8waHhUUUlZT4smYytjEp5xGQutF4wBjB1IDCqAEYIQWOgwAhsqoxAA&debug=false&forceAllTransforms=false&shippedProposals=true&circleciRepo=&evaluate=true&fileSize=true&timeTravel=false&sourceType=script&lineWrap=true&presets=env%2Cenv&prettier=true&targets=&version=7.9.6&externalPlugins=).

**Did you know:**

<blockquote class="bq"> Async await also uses generators (ES6) internally to pause and execute the code.</blockquote>

We will write the same examples using generators to see how that might work so that we get an idea how async await is using generators internally.

Before I proceed with an example, let's understand the basics of [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*).

- To create a generator function, `function keyword` should have a `*` (asterisk symbol) in it.
- A generator function returns a **generator object**.
- A generator object follows the **iterable protocol**. To know more about iterable protocol read my [previous post](http://localhost:8000/posts/custom-spread-operator).
- `Yield` is used to pause and un-pause inside the generator function.
- `next()` method in generator object is used **resume the yield** and **pause it** until the **next() method is called**.
- `next()` method returns a object with returned `value` and a status called `done` (true or false).

**Example:**

A simple counter function to return the count until maxCount is reached.

```js{numberLines: true}{111}
function* counter(maxCount) {
  var i = 0;
  while (i <= maxCount) {
    yield i++;
  }
}

var iterator = counter(2);

console.log(iterator.next()); // logs {value: 0, done: false}
console.log(iterator.next()); // logs {value: 1, done: false}
console.log(iterator.next()); // logs {value: 2, done: false}
console.log(iterator.next()); // logs {value: undefined, done: true}
```

#### Final thoughts

#### References:

- [async await specification](https://tc39.es/ecma262/#sec-async-function-definitions)
- [async await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
