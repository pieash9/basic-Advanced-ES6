const { current } = require("tailwindcss/colors");

//map, forEach, filter, find, reduce
const numbers = [1, 2, 3, 4, 5];
// .reduce (accumulator function ,initial value)
//accumulator function function use two parameters
//
const total = numbers.reduce((previous, current) => {
  console.log(previous, current);
  return previous + current;
}, 0);

console.log(total);
