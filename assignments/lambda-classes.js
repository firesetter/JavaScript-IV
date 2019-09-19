// CODE here for your Lambda Classes
class Person {
  constructor(obj) {
    this.name = obj.name;
    this.location = obj.location;
    this.age = obj.age;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(obj) {
    super(obj);
    this.specialty = obj.specialty;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }

  grade(studentObj, subject) {
    console.log(`${studentObj.name} receives a perfect score on ${subject}.`);
  }

  changeGrade(student) {
    student.grade = Math.floor(Math.random() * 101);
    console.log(`${student.name}'s new grade is ${student.grade}`);
  }
}

class Student extends Person {
  constructor(obj) {
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
    this.grade = obj.grade;
  }
  listsSubjects(arrSubjects) {
    arrSubjects.forEach(subject => console.log(subject));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }

  graduate() {
    if (this.grade > 70) {
      console.log(`Congratulations ${this.name} on graduating Lambda School!`);
    } else {
      console.log(
        `${this.name} has a score of ${this.grade} so they aren't ready to graduate yet. Let's review their code some more.`
      );
    }
  }
}

class ProjectManager extends Instructor {
  constructor(obj) {
    super(obj);
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(studentObj, subject) {
    console.log(`${this.name} debugs ${studentObj.name}'s code on ${subject}.`);
  }
}

const brit = new Instructor({
  name: "Brit",
  age: 32,
  location: "Canada",
  specialty: "HTML",
  catchPhrase: "DM me if you want to discuss this more.",
  favLanguage: "CSS"
});

const justin = new ProjectManager({
  name: "Justin",
  age: 25,
  location: "USA",
  specialty: "Leading the team",
  catchPhrase: "Let's do a coding challenge",
  gradClassName: "PT4",
  favInstructor: "Dan",
  favLanguage: "javascript"
});

const mark = new Student({
  name: "Mark",
  age: 33,
  location: "USA",
  previousBackground: "IT",
  className: "Web24",
  favSubjects: ["html", "css", "js"],
  grade: 100
});

console.log(brit);
brit.speak();
brit.demo("Less");
brit.grade(mark, "javascript");
brit.changeGrade(mark);

console.log(justin);
justin.speak();
justin.standUp("team_channel");
justin.debugsCode(mark, "callbacks");
justin.demo("javascript");
justin.grade(mark, "html");
justin.changeGrade(mark);

console.log(mark);
mark.speak();
mark.sprintChallenge("javascript");
mark.graduate();
