// Activity - 1 : Arithmetic Operation
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a % b;
}
// console.log(add(3, 4));
// console.log(sub(3, 4));
// console.log(mul(3, 4));
// console.log(div(5, 2));

// Activity - 2 : Assignment Operators
function Add(a, b) {
  return (a += b);
}
function Sub(a, b) {
  return (a -= b);
}
// console.log(Add(3, 4));
// console.log(Sub(3, 4));

// Activity-3 : Logical  Operatros
function task8() {
  let a = 4;
  let b = 4;
  if (a > b) {
    console.log("Yes, a is greater then b");
  } else {
    console.log("No, a is not gerater then b");
  }
}

function task9() {
  let a = 4;
  let b = 4;
  if (a >= b) {
    console.log("Yes, a is greater then b");
  } else {
    console.log("No, a is not gerater then b");
  }
}

function task10() {
  let a = 4;
  let b = 4;
  let c = "4";
  if (a === b) {
    console.log(
      "Yes, a is strictly equal to b because types of both a and b is same."
    );
  } else {
    console.log("No, a is not strictly equal to b");
  }

  if (a == b) {
    console.log(
      "Yes, a and b is equal, there may be a difference in there types"
    );
  } else {
    console.log("NO, a and b is not equal");
  }
}

// Activity - 4 : Logical Operator
function task11() {
  let a = true; // toggel between true and false to see different output
  let b = true; // toggel between true and false to see different output
  if (a && b) {
    console.log("a and b both are true");
  } else {
    console.log("One of them is false");
  }
}

function task12() {
  let a = true; // toggel between true and false to see different output
  let b = true; // toggel between true and false to see different output
  if (a || b) {
    console.log("one of then is ture");
  } else {
    console.log("both are false");
  }
}

function task13() {
  let val = false;
  if (!val) {
    console.log("Orignal value is false");
  } else {
    console.log("Orignal value is true");
  }
}

// Activity - 5 : Ternary Operator

function task14() {
  let a = 5;
  a > 0 ? console.log("positive") : console.log("negative");
}

task14();
