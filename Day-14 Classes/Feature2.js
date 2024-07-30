class Person {
  constructor(username, age) {
    this.username = username;
    this.age = age;
  }
  greeting() {
    return `Hello ${this.username} your age is ${this.age}`;
  }
  updateage() {
    this.age++;
    console.log(`You age is updated to ${this.age}`);
  }
}

class Student extends Person {
  constructor(id, username, age) {
    // "super" is the keyword used to call the parent class befor using "this".
    super(username, age);
    this.id = id;
  }
  studentId() {
    console.log(`${this.username} is the student and Id is ${this.id}`);
    return this.id;
  }

  // Function overridding - Task-4
  greeting() {
    console.log(`${super.greeting()} and your Id is ${this.id}`);
  }
}

const chai = new Student(101, "devanshu", 21);
chai.studentId(); // output of Task-5
chai.greeting(); // output of Task-4
