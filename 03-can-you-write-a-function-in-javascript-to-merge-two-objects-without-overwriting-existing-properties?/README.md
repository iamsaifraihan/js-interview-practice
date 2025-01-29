# Can you write a function in JavaScript to merge two objects without overwriting existing properties?

Write a function in JavaScript that takes two objects as input and merges them into a single object. The function should ensure that existing properties in the first object are not overwritten by properties from the second object. If a property exists in both objects, the value from the first object should be retained.

## Examples:

```javaScript
// Input
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// Output
const mergedObj = { a: 1, b: 2, c: 4 };
```
