const { current } = require("daisyui/src/colors");

// 1 map
const array = [1, 3, 5, 7, 9];
const evenArray = array.map((number) => number + 1);
// console.log(evenArray);

// 2 filter
const array2 = [33, 50, 79, 78, 90, 101, 30];
const DivideBy10 = array2.filter((number) => number % 10 === 0);
// console.log(DivideBy10);

//3 find
const DivideBy10Again = array2.find((number) => number % 10 === 0);
// console.log(DivideBy10Again);

// 4 reduce
const array3 = [1, 9, 17, 22];
const sumAll = array3.reduce((previous, current) => {
  return previous + current;
}, 0);
// console.log(sumAll);

// 5  reduce
const people = [
  { name: "meena", age: 20 },
  { name: "rina", age: 15 },
  { name: "bina", age: 22 },
];

const sum = people.reduce((sum, person) => sum + person.age, 0);
console.log(sum);

// 6 Access object value
const student1 = {
  name: "pieash",
  age: 26,
};
// console.log(student1.age);

//7 access object value
let data = {
  location: [
    {
      latitude: "34.1 , 37",
      longitude: "89.2,66",
      city: "hydrabad",
      country: "India",
    },
  ],
};
const cityName = data.location[0].city;
// console.log(cityName);

// 8 access object value
const user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
// console.log(user.email);
// console.log(user.address);
// console.log(user.address.city);
// console.log(user.address.geo.lat);
// console.log(user.company.name);
const age = 30;

const message = age >= 18 ? "You are an adult" : "You are not an adult";

// console.log(message);
