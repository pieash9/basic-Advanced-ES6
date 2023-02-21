//syntactic sugar
class Instructor {
  name;
  designation = "Instructor";
  team = "Web team";
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  startSession(time) {
    console.log(`session will start at ${time}`);
  }
  createQuiz(moodule) {
    console.log(`please create quiz for module ${moodule}`);
  }
}
const aamir = new Instructor("aamir", "Dhanmondi");
// console.log(aamir);
aamir.startSession("9.00 PM");
aamir.createQuiz("30 ");

const solaiman = new Instructor('solaiman Khan','Bonani');
// console.log(solaiman); 

class Vehicles{
    constructor(make,model,color){
        this.make = make;
        this.model=model;
        this.color = color;
    }
    getName(){
        return this.make +' '+this.model;
    }
}
let car = new Vehicles('BMW','X','black')
console.log(car);