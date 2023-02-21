const users = [{ id: 1, name: "abul", job: "doctor" }];
// console.log(users[0].name);
const data = {
  count: 5000,
  data: [
    { id: 1, name: "abul", profession: "leader" },
    { id: 2, name: "Dabul", profession: "leader" },
  ],
};
const firstJob = data.data[0].profession;
// console.log(firstJob);
const user = {
  id: 5001,
  name: "thomas albad edison",
  address: {
    street: {
        first: "kocukhet",
        second: 'third floor',
        third: 'right side'
    },
    postOffice: "Cantonment",
    city: "Dhaka",
  },
};

const userFloor = user.address.stret?.second;
console.log(userFloor);