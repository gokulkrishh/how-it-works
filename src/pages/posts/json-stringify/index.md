---
path: "/posts/json-stringify"
published: true
date: "2020-05-19"
title: "JSON.stringify"
description: "JSON.stringify is a method in javascript which converts a value (Eg: Object) to a JSON string."
---

`stringify()` is a method in **JSON** object which converts a value (Eg: Object) to a string in **UTF-16** encoded JSON format. JSON.stringify() accpets 3 parameters.

- **Value** - Could be a Object, Array, Boolean, Null, Undefined, String.
- **Replacer** or **Inclusion** function (optional) - To alter or include.
- **Space** (optional) - To insert which space to make it readable (Eg: 2 or "2").

**Note:**

- If the object contains `toJSON` key with value as a function (a method), then value returned by the method will be serialized instead of the object values.
- Also we cannot serialize an object which has circular reference. A type error will be thrown by the javascript engine.

**Example:**

```js{numberLines: true}{111}
var myObj = {
  random: 73,
  "random float": 93.655,
  bool: false,
  date: "1987-03-11",
  firstname: "Myrtice",
  lastname: "Rosalba",
  city: "Amritsar",
  countryCode: "MP",
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

console.log(JSON.stringify(myObj)); // Logs json object

console.log(JSON.stringify(myObj, stringReplacer)); // Logs only number, boolean, null value in json object

console.log(JSON.stringify(myObj, undefined, 2)); // Logs formatted json object
```

#### References

- [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [JSON.stringify specification](https://tc39.es/ecma262/#sec-json.stringify)
