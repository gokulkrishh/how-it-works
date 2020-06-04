---
path: "/posts/bind"
published: true
date: "2020-06-09"
title: "bind()"
description: "Bind method in javascript returns a function which when called has this property set with provided value"
tags: ["javascript", "bind"]
---

Bind method in javascript was introduced in **ECMAScript 5**. Bind method returns a **function** which when called has **this** property set with provided value.

By using bind method we can call any function with custom this object.

**Syntax:**

```js
.bind(thisArg, arg1, arg2, arg3, ....);
```

**Example**:

```js
function getName(firstName) {
  return firstName + this.lastName;
}

var obj = { lastName: " World!" };

const bindFunz = getName.bind(obj, "Hello"); // returns a new function

console.log(bindFunz()); // Logs "Hello World!"
```
