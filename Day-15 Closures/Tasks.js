// Task -1

function init() {
  let name = "Devanshu";
  return function helper() {
    console.log(name);
  };
}
const getname = init();
getname();

// Task-2

function counter() {
  let count = 1;
  return function incrementCounter() {
    return count++;
  };
}

let f2 = counter();
console.log(f2(), f2(), f2());

// Task-3
function track() {
  let oldId = 1;
  function increment() {
    let newId = oldId++;
    return newId;
  }
  return increment;
}

let f3 = track();
console.log(f3(), f3(), f3());

// Task-4
function username(name) {
  function greet() {
    console.log(`Hello ${name}`);
  }
  return greet;
}

let f4 = username("Devanshu");
f4();

// Task-5
function loop() {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr[i] = function () {
      return `index ${i}`;
    };
  }
  return arr;
}

let f5 = loop();
f5.map((index) => console.log(index()));

// Task-6
function collection() {
  let list = [];
  function add(item) {
    list.push(item);
  }
  function remove(item) {
    list.pop(item);
  }
  return { add, remove, list };
}

let { add, remove, list } = collection();
add("apple");
add("banana");
add("potato");
add("tomato");
console.log(list);
remove("apple");
console.log(list);

// Task-7
function sum(a, b) {
  let c = a + b;
  return c;
}

function memo() {
  let result = sum(3, 4);
  return result;
}
let f7 = memo();
console.log(f7);

// Task-8
function fact(num) {
  if (num <= 1) {
    return 1;
  }
  return fact(num - 1) * num;
}

function factorail(num) {
  let result = fact(num);
  return result;
}
let f8 = factorail(5);
console.log(f8);
