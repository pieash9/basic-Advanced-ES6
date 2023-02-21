const numbers = [2, 5, 6, 7, 8];
const output = [];
for (const number of numbers) {
  const doubled = number * 2;
  output.push(doubled);
}
// console.log(output);

function getDoubled(number) {
  const output = [];
  for (const number of numbers) {
    const doubled = doubeIt(number);
    output.push(doubled);
  }
  return output;
}

const doubeIt = (numbers) => numbers * 2;
const makeDoubled = numbers.map(doubeIt);
const makeDoubledDirect = numbers.map((numbers) => numbers * 2);
const makeDouble2 = numbers.map((x) => x * 2);
const fiveTimes = [1, 2, 3, 4, 5].map((x) => x * 5);
console.log(fiveTimes);
// console.log(makeDoubledDirect);
// function doubeIt (number){
//     return number*2;
// }

/* 
purposes:
1. get an array
2.for every element of the array do something
3. store the result in an aray
4. return the array result
*/
// console.log(getDoubled(numbers));
// console.log(makeDoubled);
