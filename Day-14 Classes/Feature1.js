// Task-1
class Person {
  constructor(username, age) {
    this.username = username;
    this.age = age;
  }
  greeting() {
    return `Hello ${this.username} your age is ${this.age}`;
  }

  // Task-2 update age property
  updateage() {
    this.age++;
    console.log(`You age is updated to ${this.age}`);
  }
}

const user1 = new Person("devanshu", 21);
console.log(user1.greeting()); //output of Task-1
user1.updateage(); // output of Task-2
