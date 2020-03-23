---
path: "/javascript/eventEmitters"
published: true
date: "2020-03-24"
title: "Event Emitters"
description: "Promise.allSettled returns a promise when all inputs are settled that is either fulfilled or rejected."
---

Event emitters are useful when you want to listen to an event and do something when it happens. An event emitter is also called as `publisher/subscriber` pattern.

Wait, I know this. If you have used `Redux` which uses similar kind of event emitters to **dispatch** an event and **subscribers** can listen to it the changes.

### Skeleton Code:

```js
function eventEmitter() {
  // Code
}

var emitter = new eventEmitter();

var data = {}; // Some data

// Dispatch or Emit an event
emitter.emit("event-name", data);

// Subscribe to an event
emitter.on("event-name", data => {});

// Remove an event
emitter.off("event-name");

// Emit all available events
emitter.emit("*", () => {});
```

#### Methods in our event emitter function consists of:

- An object called `events` to hold all the events.
- `on()` - To listen to an event.
- `emit()` - To emit an event.
- `off()` - To remove an event.

Let's see how each method works in our event emitter.

### on() method:

**On method** accepts two parameters **name** and a **callback**.

- If event name is not present in our events object, create an event with empty array.
- Empty array is to hold as many callback functions as it can.

Now lets see the code for on method.

#### Code:

```js
function eventEmitter() {
  const events = {}; // To hold our events

  // On method to listen
  function on(eventName, callback) {
    // If event is not present, create an empty array to hold multiple events
    if (!events[eventName]) {
      events[eventName] = []; // To hold multiple on events
    }

    // Push the callback function to event name so that we can listen as many time as we want.
    events[eventName].push(callback);
  }

  return { on }; // return on method
}
```

### emit() method:

Emit method consists of two conditions.

1. Check if the emitted event is `*` (all) and call all the events from `events` object.
1. Else check if emitted event is present in our events object, if so call it.

```js
function eventEmitter() {
  const events = {}; // To hold our events

  // To emit an event with options
  function emit(eventName, options) {
    // Check if event is all and if so call all the events with arguments
    if (eventName === "*") {
      // Iterate the events object and call each obj
      Object.keys(events).forEach(eventKey => {
        // Call all the events
        events[eventKey].forEach(event => event(eventName, options));
      });
    }

    // Check if event is present in eventName and if so call event with arguments
    if (events[eventName]) {
      // Call events match the name
      events[eventName].forEach(event => event(options));
    }
  }

  return { emit }; // return emit method
}
```

### off() method:

Off method is pretty simple, we will `remove` the event & its callback from our events object if present.

```js
function eventEmitter() {
  const events = {}; // To hold our events

  // To listening to an event
  const off = (eventName, callback) => {
    if (events[eventName]) {
      events[eventName] = events[eventName].filter(event => event !== callback);
    }
  };

  return { off }; // Return the event
}
```

### Full code:

```js
function eventEmitter() {
  const events = {}; // To hold our events

  // On method to listen
  const on = (eventName, callback) => {
    // If event is not present, create an empty array to hold multiple events
    if (!events[eventName]) {
      events[eventName] = []; // To hold multiple on events
    }

    // Push the callback function to event name so that we can listen as many time as we want.
    events[eventName].push(callback);
  };

  // To emit an event with options
  const emit = (eventName, options) => {
    // Check if event is all and if so call all the events with arguments
    if (eventName === "*") {
      // Iterate the events object and call each obj
      Object.keys(events).forEach(eventKey => {
        // Call all the events
        events[eventKey].forEach(event => event(eventName, options));
      });
    }

    // Check if event is present in eventName and if so call event with arguments
    if (events[eventName]) {
      // Call events match the name
      events[eventName].forEach(event => event(options));
    }
  };

  // To listening to an event
  const off = (eventName, callback) => {
    if (events[eventName]) {
      events[eventName] = events[eventName].filter(event => event !== callback);
    }
  };

  return { emit, on, off }; // Return the method
}
```

### Demo:

<iframe
     src="https://codesandbox.io/embed/confident-moser-7vc1w?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Event Emitters"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
   ></iframe>

### Final thoughts
