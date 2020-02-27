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

#### Cons:

- It can be used copying but only up to one level deep. So it is not suitable for copying multidimensional arrays.
- It can spread only **enumerable** properties of an Object.
- It can only be applied to [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) objects.
- It will work on both **Array** and **Object** data types but you cannot mix and match them.

#### Pros:

- Can be used for shallow cloning an object if we want to copy only that object own properties.
- Cleaner syntax and less code when merging or copying.
- Can call a function or use a **Math** method without the need for **.apply** method to pass multiple parameters.
- It can be used to convert an array like object into an actual array. (**Eg: NodeList from DOM**)

Now we have an idea of what spread operator is and what it can and can't do. Lets implement it step by step.

#### Step 1:

- We will use [Symbol.iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) to write our custom spread operator.

Before we proceed further, let us see what is **Symbol.iterator** method.

Actually its very simple:

- **Symbol.iterator** let us to create a custom iterator (Eg: **for of**).
- It uses **iterator protocol** which defines a standard way to produce a sequence of values which is either **finite** or **in-finite** and return those values **when all values** are done or generated.
- Iterable data sources are **Array**, **Sets**, **Maps**, **Objects**, **arguments** and **DOM data structures** (Eg: **NodeList**) etc,.

**Symbol.iterator** contains two parts.

1. An object whose key is **Symbol.iterator** called `Iterable`.
1. A function for above key called `Iterator` to iterate the values passed to it.

**Example**:

```js
var myCustomIterator = {
  [Symbol.iterator]: function() {},
};
```

Simple right? 😆

In below example, we will create our **iterable function** to understand how `Symbol.iterator` it works.

```js
// Simple function which will accept one parameter called `n`
// And we will return our myCustomIterator with some more operation when we call below function
var getMyNumbers = function(n) {
  var myCustomIterator = {
    [Symbol.iterator]: function() {
      var i = 0;
      return {
        // Below code is explained at the end of the example
        next: () => {
          return {
            value: i++,
            done: i === n,
          };
        },
      };
    },
  };
  return myCustomIterator;
};

getMyNumbers(); // returns {Symbol(Symbol.iterator): ƒ}
```

I will explain above code before proceeding to next step.

```js
// Now we made a iterable function which can be iterated in for of
for (var i of getMyNumbers(10)) {
  console.log(i); // prints from 1 to 10
}
```

In our next example, we will create our **custom spread operator** to **spread numbers** from **1 to n** without using **for of** loop.

<hr />

#### References:

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Spread operator TC39 specification](https://tc39.es/proposal-object-rest-spread/)
- [Iterables and iterators](https://exploringjs.com/es6/ch_iteration.html#ch_iteration)
