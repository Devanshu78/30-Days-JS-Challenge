// Task - 1
let number = 10;
if (number > 0) {
  console.log("+ve");
} else if (number == 0) {
  console.log("zero");
} else {
  console.log("-ve");
}

// Task - 2
let age = 22;
if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can not vote");
}

// Task-3
let a = 2;
let b = 4;
let c = 3;
if (a > b) {
  if (a > c) {
    console.log("A is greater");
  } else {
    console.log("1 C is greater");
  }
} else if (b > a) {
  if (b > c) {
    console.log("B is greater");
  } else {
    console.log("2 C is greater");
  }
} else {
  console.log("3 C is greater");
}

// Task - 4
let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid");
    break;
}

// Task - 5
let score = 95;
switch (score <= 100) {
  case score >= 90:
    console.log("A");
    break;
  case score >= 70:
    console.log("B");
    break;
  case score >= 55:
    console.log("C");
    break;
  case score >= 41:
    console.log("D");
    break;
  case score >= 0:
    console.log("F");
    break;

  default:
    console.log("Invalid score number");
    break;
}

//Task - 6
let num = 7;
num % 2 == 0 ? console.log("even") : console.log("odd");

// Task - 7
let year = 2024;
if (year % 4 == 0 && year % 100 !== 0 && year % 400 === 0) {
  console.log(`${year}`, "it's leap year");
} else {
  console.log(`${year}`, "It's not a leap year");
}
