class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }
  set fullname(name) {
    const [firstname, lastname] = name.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const chai = new Person("devanshu", "pandey");
console.log(chai.fullname); // Task-7 get full name
chai.fullname = "Jhon Doe";
console.log(chai.fullname); // Task-8 update the name
