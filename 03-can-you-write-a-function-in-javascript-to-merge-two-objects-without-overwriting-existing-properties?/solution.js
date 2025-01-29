// Solution for: Can you write a function in JavaScript to merge two objects without overwriting existing properties?

function solution(obj1, obj2) {
  return {
    ...obj1,
    ...obj2
  }
}
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

console.log(solution(obj1, obj2))

module.exports = solution;

