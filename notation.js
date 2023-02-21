const student = {
  name: "kolim uddin",
  class: "ten",
  marks: {
    math: 85,
    physics: 81,
    chemistry: 65,
  },
  age: 15,
};
// console.log(student.marks.physics);
const chemestry = student['marks']['chemistry'];
// console.log(chemestry);
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);