---
path: "/react/redux"
published: true
date: "2020-03-31"
title: "Redux"
description: "Redux is a predictable state container for javascript applications"
---

Redux is a predictable state container for javascript applications. In layman's term, We store our data in a centralized place and pass it where ever needed by the application.

### Few advantages of redux:

- **Single source of truth** - Single data source.
- **Predicable** - Behaves consistently no matter the environments (client, server and native).
- **Developer Friendly** - With redux devTools it is easy to debug and test our application.
- **Flexible** - Works with any UI layered application.

### Skeleton:

Lets list down the redux concepts one by one before implementing them.

- `Store` - Centralized store for our data (**Read only, Plan object**).
- `Actions` - Information about your change and our data (**What happened**).
- `Reducers` - Accept an action and decide how to change our state (**How to change a state**).

```js
const store = {}; // Plain object

// Action types
const userActionTypes = {
  ADD_USER: "ADD_USER",
};

// Action
const addUser = userInfo => ({
  type: userActionTypes.ADD_USER,
  payload: userInfo,
});

// initial state for our reducer
const initialState = {
  user: {
    name: "",
    age: "",
  },
};

// Reducer
function userReducer(state = initialState, action) {}
```

### Final thoughts

#### References

- [Redux](https://redux.js.org/introduction/getting-started)
