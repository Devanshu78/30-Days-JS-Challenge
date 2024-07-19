let num = Math.floor(Math.random() * 10) + 1;

// Feature-1
function evenOdd(num) {
  num % 2 == 0
    ? console.log(`${num}`, "is even")
    : console.log(`${num}`, "is Odd");
  return;
}

//Feature-2
const sqr = function (s) {
  console.log(`Square Root of ${s} is ${s * s}`);
  return;
};

// Feature-3
const concat = function (str1, str2) {
  return str1.concat(str2);
};
const string = concat("Dev", "anshu");

// Feature-4
const sum = (a, b) => {
  return a + b;
};
let num2 = Math.floor(Math.random() * 10) + 1;
const result = sum(num, num2);

// Feature-5
const highOrder = (child, n) => {
  for (let i = 0; i < n; i++) {
    child();
  }
};

function child() {
  console.log("Parent is calling");
}

// Day 5 all feature
const day5feature = function () {
  evenOdd(num);
  sqr(num);
  console.log(string);
  console.log(`sum of ${num} and ${num2} is ${result}`);
  highOrder(child, 4);
};

day5feature();
