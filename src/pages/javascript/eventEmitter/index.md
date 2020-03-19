---
path: "/javascript/eventEmitters"
published: true
date: "2020-03-17"
title: "Event Emitters"
description: "Promise.allSettled returns a promise when all inputs are settled that is either fulfilled or rejected."
---

Event emitters are useful when you want to listen to `specific` event and do something when it happens. Basically an event emitter consists of two properties called `emit` (dispatch) to emit an event and `on` (subscribe) to listen to an specific event.

Wait, i know this. Yep you know this if you have used `Redux` which uses similar kind of event emitters to **dispatch an event** and **all of the subscribers** will listen to it.

### Example

```js
// Some data
const data = {};

// Dispatch or Emit
store.dispatch("event-name", data);

// Subscribe to event
const unsubscribe = store.subscribe("event-name", data => console.log(data));

// To unsubscribe
unsubscribe();
```
