// Solution for: reverse the order of words 

function reverseString(str) {
  return str.split(' ').reverse().join(' ');
}

module.exports = reverseString;
console.log(reverseString('saif Raihan Ashraf'));