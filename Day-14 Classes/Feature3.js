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

  // Static method can be call without creating instance
  static greetAll() {
    console.log(`Hello, You are the best 👍 `);
  }
}

class Student extends Person {
  // static property
  static totalStudent = 0;
  constructor(id, username, age) {
    super(username, age);
    this.id = id;
    Student.totalStudent++; // we call count inside counstructor
  }
  studentId() {
    console.log(`${this.username} is the student and Id is ${this.id}`);
    return this.id;
  }
  greeting() {
    console.log(`${super.greeting()} and your Id is ${this.id}`);
  }
}

const raj1 = new Student(201, "Raj", 15);
const raj2 = new Student(202, "Aman", 14);
const raj3 = new Student(203, "Aayush", 13);
const raj4 = new Student(204, "Ankur", 12);
const raj5 = new Student(205, "Dev", 14);

Person.greetAll(); // output of  Task-5
console.log(Student.totalStudent); // output of Task-6
