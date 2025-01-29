// Solution for: Can you write a function in JavaScript to remove duplicate elements from an array?

function solution(arr) {
  const newArr = new Set(arr);
  return Array.from(newArr)
}


module.exports = solution;
const arr = [1, 2, 2, 3, 4, 4, 5]
console.log(solution(arr));