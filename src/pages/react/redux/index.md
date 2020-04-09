---
path: "/react/redux"
published: true
date: "2020-03-31"
title: "Redux"
description: "Redux is a predictable state container for javascript applications"
---

Redux is a predictable state container for javascript applications. In layman's term, We store our data in a centralized place and pass it where ever needed by the application.

### 👉🏻 Few points about redux:

- **Single source of truth** - Single data source.
- **Predicable** - Behaves consistently no matter the environments (client, server and native).
- **Developer Friendly** - With redux devTools it is easy to debug and test our application.
- **Flexible** - Works with any UI layered application.

### 👨🏻‍💻 Skeleton code:

We will try to understand the core concept of redux before implementing it.

- `Store` - A centralized data store (**Read only, Plan object**).
- `Action` - An information about the change (**What happened** and **What is the change**).
- `Reducer` - A pure function to decide what to do with the data (**How to change a state**).

#### Methods in redux are

```js
// To create our data store
function createStore() {}

// To get the state
function getState() {}

// To dispatch or send an action
function dispatch() {}

// To subscribe to the state change
function subscribe() {}
```

#### 1. createStore()

To create our data store of the application. Main concept of redux is we can have only one store. [createStore()](https://redux.js.org/api/createstore) method accepts [three arguments](https://redux.js.org/api/createstore#arguments).

1. Reducers (Root reducer)
1. Preloaded state (initial state - `optional`)
1. Enhancer (`optional`) - Just to reduce the scope of this post we will not look into this.

Now let us try understand how createStore might look like in terms of code.

```js
function createStore(rootReducer, preloadedState = {}, enhancers) {
  // preloadedState or {}
  let state = preloadedState;

  // Returning the 3 methods and more into this later.
  return { getState, dispatch, subscribe };
}
```

createStore function will return 3 methods (getState, dispatch, subscribe). This method is self-explanatory so will skip explaining.

#### 2. getState()

This method returns the latest state from redux store.

```js
function createStore(rootReducer, preloadedState = {}, enhancers) {
  // preloadedState or {}
  let state = preloadedState;

  // Return the state
  function getState() {
    return state; // Here state has latest update store data
  }

  // Returning the 3 methods and more into this later.
  return { getState, dispatch, subscribe };
}
```

#### 3. dispatch()

Dispatches an action which contains the information about the change. This is the only way to update the state in redux store.

```js{10-10}
function createStore(rootReducer, preloadedState = {}, enhancers) {
  // preloadedState or {}
  let state = preloadedState;

  // Return the state
  function getState() {
    return state; // Here state has latest update store data
  }

  function dispatch(action) {}

  return { getState, dispatch, subscribe };
}
```

### Final thoughts

#### References

- [Redux](https://redux.js.org/introduction/getting-started)
