---
path: "/posts/json-stringify"
published: true
date: "2020-05-19"
title: "JSON.stringify()"
description: "JSON.stringify() is a method in javascript which converts a value (Eg: Object) to a JSON string."
---

`stringify()` is a method in **JSON** object which converts a value (Eg: Object) to a string in **UTF-16** encoded JSON format.

**JSON.stringify()** accpets 3 parameters:

- **Value** - Could be a Object, Array, Boolean, Null, Undefined, String.
- **Replacer** or **Inclusion** function (optional) - To alter or include.
- **Space** (optional) - To insert which space to make it readable (Eg: 2 or "2").

**Note:**

- If the object contains `toJSON` key with value as a function (a method), then value **returned by the method** will be used and serialized instead of the values of the object.
- Also **we cannot serialize** an object which has **circular reference**. A **type error** will be thrown by the javascript engine.

**Example:**

```js{numberLines: true}{111}
var myObj = {
  random: 73,
  "random float": 93.655,
  isAlive: true,
  date: "1987-03-11",
  firstname: "Myrtice",
  lastname: "Rosalba",
  city: "Amritsar",
  countryCode: "MP",
  nullValue: null,
  array: ["Georgina", "Lolita", "Shandie", "Deirdre", "Lynea"],
  "array of objects": [
    {
      index: 0,
      "index start at 5": 5,
    },
    {
      index: 1,
      "index start at 5": 6,
    },
    {
      index: 2,
      "index start at 5": 7,
    },
  ],
};

// String replacer function
function stringReplacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

console.log(JSON.stringify(myObj)); // Logs formatted json object

console.log(JSON.stringify(myObj, stringReplacer)); // Logs only formatted number, boolean, null value in json object

console.log(JSON.stringify(myObj, undefined, 2)); // Logs formatted json object
```

Now that we have seen the output of **JSON.stringify()** method, lets implement it step by step.

### 1. Serializing values

For starters, we will start with the following **data types**.

- string
- number
- boolean
- undefined

```js{numberLines: true}{2,5,9,13-14}
function stringify(value) {
  var type = typeof value; // to get the type of the argument

  function getValues(value) {
    if (type === "undefined") {
      return undefined;
    }

    if (type === "number" || type === "boolean") {
      return "" + value + "";
    }

    if (type === "string") {
      return '"' + value + '"';
    }
  }

  return getValues(value);
}

stringify(1); // "1"

stringify("abc"); // ""abc""

stringify(true); // "true"

stringify(undefined); // returns undefined
```

Above function so far is self explanatory. So we are skipping the explanation.

Lets add support for more data types like

- array
- object
- null
- date

To support array and object, we should be able to parse the value up to `n level`. So n level means recursion. We have to recursively go up the children and serialize the values of array and object. Also one interesting thing I noticed is for date objects, JSON.stringify() method returns the value in ISO format.

```js{numberLines: true}{20,25-27,31-32,37-41}
function stringify(value) {
  var type = typeof value;

  function getValues(value) {
    if (type === "undefined") {
      return undefined;
    }

    if (type === "number" || type === "boolean") {
      return "" + value + "";
    }

    if (type === "string") {
      return '"' + value + '"';
    }
  }

  if (type === "object") {
    // To check if the value is null or date object
    if (!value) {
      return "" + value + "";
    }

    // To check if the value is date object
    if (value instanceof Date) {
      // returns a ISO string format as per JSON.stringify
      return '"' + new Date(value).toISOString() + '"';
    }

    // To check if the value is Array
    if (value instanceof Array) {
      return "[" + value.map(stringify) + "]"; // Call stringify recursively to return its value
    } else {
      // Else it is just an object
      // Call stringify recursively to map key and its value
      return (
        "{" +
        Object.keys(value).map(
          valueKey => '"' + valueKey + '"' + ":" + stringify(value[valueKey])
        ) +
        "}"
      );
    }
  }

  return getValues(value);
}

stringify([1, 2, 3]); // "[1,2,3]"

stringify(new Date()); // prints date in ISO format

stringify({ a: 1 }); // ""{a:1}""

stringify(myObj) === JSON.stringify(myObj); // true

JSON.parse(stringify(myObj)); // Works as expected
```

Above function now works for all of the data types and also output is same as the JSON.stringify() method.

#### References

- [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [JSON.stringify specification](https://tc39.es/ecma262/#sec-json.stringify)
