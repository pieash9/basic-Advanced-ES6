const numbers = [45, 66, 35, 33];
const half = numbers.map((n) => n / 2);
const third = numbers.map((n) => n / 3);
// console.log(third);
// console.log(half);
const friends = ["pieash ahmed", "rizvi khan", "naruto lisam", "kholil ahmed"];
const firstLetter = friends.map((friend) => friend[0]);
const friendLengths = friends.map((friend) => friend.length);
// console.log(friendLengths);
// console.log(firstLetter);
const products = [
  { id: 1, name: "laptop", price: 55000 },
  { id: 2, name: "phone", price: 85000 },
  { id: 3, name: "watch", price: 35000 },
  { id: 4, name: "tablet", price: 45000 },
];
const items = products.map(product=>product.name);
const price = products.map(p => p.price);
console.log(price);
console.log(items);
