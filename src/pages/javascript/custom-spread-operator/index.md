---
path: "/javascript/custom-spread-operator"
published: true
date: "2020-03-03"
title: "Custom Spread Operator"
---

<br /><img src="./custom-spread-operator.png" alt="Custom Spread Operator" /><br />

[Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) denoted by **…** (3 dots) in javascript basically takes an array or object or string and can **copy or expand or concat or merge** its items to an another variable.

And we will not be looking into [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Rest_syntax_parameters) which looks similar to spread operator but used for destructing array and objects.

#### Example:

```js
var str = "Hello World";
console.log(...str); // Hello World

var obj = { name: "My Car", modelYear: "2018" };
var obj2 = { model: "Ferrari" };
console.log({ ...obj, obj2 }); // { "name": "My Car", "modelYear": "2018", "model": "Ferrari" }

var arr = [1, 2, 3, 4, 5];
console.log(...arr); // 1 2 3 4 5
```

<p>First we will see its pros and cons and how it works then we will implement it.</p>

Let us start with cons.

**Cons**:

- It can be used copying but only up to one level deep. So it is not suitable for copying multidimensional arrays.
- It can spread only **enumerable** properties of an Object.
- It can only be applied to [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) objects.
- It will work on both **Array** and **Object** data types but you cannot mix and match them.

**Pros**:

- Can be used for shallow cloning an object if we want to copy only that object own properties.
- Cleaner syntax and less code when merging or copying.
- Can call a function or use a **Math** method without the need for **.apply** method to pass multiple parameters.
- It can be used to convert an array like object into an actual array. (**Eg: NodeList from DOM**)

Now we have an idea of what spread operator can and can't do.

<hr />

#### References:

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Spread operator TC39 specification](https://tc39.es/proposal-object-rest-spread/)
