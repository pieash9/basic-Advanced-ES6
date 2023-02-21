class TeamMember{
    name;
    location;
    constructor(name,location){
        this.name = name;
        this.location=location;
    }
    provideFeedBack(){
        console.log(`${this.name} thank you for your feedback.`);
    }
}


class Instructor extends TeamMember{
    designation = "Instructor";
    team = "Web team";

    constructor(name, location) {
      super(name,location)
    }
    startSession(time) {
      console.log(`session will start at ${time}`);
    }
    createQuiz(moodule) {
      console.log(`please create quiz for module ${moodule}`);
    }
   
  }
  class Developer  extends TeamMember{

    designation = "Instructor";
    team = "Web team";

    tech;
    constructor(name, location, tech) {
      super(name,location)
      this.tech = tech;
    }
    developFeature(feature) {
      console.log(`Please develop the ${feature}`);
    }
    release(version) {
      console.log(`please create quiz for module ${version}`);
    }
    provideFeedBack(){
        console.log(`${this.name} thank you for your feedback.`);
    }
  }

  class JobPlacement extends TeamMember{

    designation = "Job placement commandos";
    team = "JobPlacement team";
    region;
    constructor(name, location, region) {
      super(name,location)
      this.region = region;
    }
    provideResume(feature) {
      console.log(`Please develop the ${feature}`);
    }
    prepareStudent(version) {
      console.log(`please create quiz for module ${version}`);
    }
  }

  const alia = new Developer('alia bhaat','dhaka','react');
  console.log(alia);
  alia.provideFeedBack();
  const bipasha = new JobPlacement('bipasha basu','kolkata','india');
  console.log(bipasha);