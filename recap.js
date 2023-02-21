// 1 var let const
// breakup with var
const numbers = [12, 3, 4];
let salary = 500;
salary = 600;
// 2 deafult  parametrs

function calculateSalaray(salaray, tax = 0.25, bonus = 0) {
  const remaining = salaray - salaray * tax;
  const total = remaining + bonus;
  return total;
}
// 3 template string
const elementHtml = `
<div>
<h3>Name :</h3>
<p>Salary :</p>
<p>Address :${calculateSalaray(10000, 0, 0)}</p>
<p>Others : ${numbers}</p>

</div>

`;

//4 arrow function
const doubleIt = (x) => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

//5 spread
const ages = [12, 13, 14, 15, 16, 17];
const newAges = [...ages, 22, 24, 26];

// 6 destructring
const { x, y, ...c } = {
  x: 45,
  y: 22,
  z: 33,
  name: "shakib al hasan",
  salaray: 450000,
};
const [a, b, d] = [12, 13, 14, 15, 16];
