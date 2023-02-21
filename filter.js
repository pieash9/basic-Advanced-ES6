const numbers = [13, 5, 22, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter((numer) => numer > 20);
const tiny = numbers.filter(n => n<10);
const even = numbers.filter(n=> n%2==0);
// console.log(even);
// console.log(tiny);
// console.log(bigNums);
const products = [
    { id: 1, name: "laptop", price: 55000 },
    { id: 2, name: "phone", price: 85000 },
    { id: 3, name: "watch", price: 35000 },
    { id: 4, name: "tablet", price: 45000 },
  ];
//   const expensive = products.filter(product => product.price >100000);
//   const expensive = products.filter(product => product.price >100);
  const expensive = products.filter(product => product.price <100);
  console.log(expensive);