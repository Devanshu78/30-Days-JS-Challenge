// Task-1
function eveOdd(a) {
  a % 2 == 0 ? console.log("even") : console.log("odd");
}

// Task-2
function squr(a) {
  console.log(a * a);
}
// squr(8); // output -> 64

//Task-3
const maxOne = (a, b) => {
  a > b ? console.log(`${a} is greater`) : console.log(`${b} is greater`);
};

// Task-4
function addStr(a, b) {
  return a + b;
  //   return (a += b);
}

// Task-5
const sum = (a, b) => {
  return a + b;
};

// Task-6
const special = (str, ch) => str.includes(ch);

// Task-7
const prod = (a, b = 5) => {
  return a * b;
};

//Task-8
const greet = (name, age = 18) => {
  console.log(`Hello ${name}. You are ${age} years old`);
};

// Task-9
function call(greet, num = 2) {
  for (let i = 0; i < num; i++) {
    greet("Raj", 20);
  }
}

//Task-10
function high(fun1, fun2, num) {
  const res = fun1(num);
  console.log(res);
  console.log(fun2(res));
}

const child1 = (val) => val * 2;
const child2 = (val) => val + 10;

const runDay5 = () => {
  eveOdd(4);
  squr("8"); // output ->  64
  maxOne(43, 74);
  console.log(addStr("Dev", "anshu"));
  console.log(sum(2, 5));
  console.log(special("dev", "e"));
  console.log(prod(2, 3));
  greet("Dev");
  call(greet, 5);
  high(child1, child2, 5);
};
// runDay5();
