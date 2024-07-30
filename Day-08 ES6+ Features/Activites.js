// =====================  Activity 1 : Template Literals ==================
// Task-1
const detail = {
  user: "Devanshu",
  age: 12,
};
// console.log(`${detail.user} and his age is ${detail.age}`);

//Task-2
let multiLine = `This is the for multi-Line string
where ${detail.user} and his age ${detail.age} is 
present in the Object name as detail object.`;

// console.log(multiLine);

// =====================  Activity 2 : Destructuring ==================
// Task-3
let numbers = [2, 3, 4, 5, 6];
let [firstNum, secondNum] = numbers;
// console.log(firstNum, secondNum);

// Task-4
const book = {
  title: "Ratan Tata A Complete Biography",
  author: "A.K. Gandhi ",
};
let { title, author } = book;
// console.log(`${title} by ${author}`);

// =====================  Activity 3 : Spread and Rest Operators ==================
// Task-5
let color = ["Red", "Green", "Orange", "Yellow", "Black"];
let newArray = [...color, ...numbers];
// console.log(newArray);

// Task-6
function sumAll(...args) {
  let sum = 0;
  args.map((arg) => (sum += arg));
  return sum;
}

// console.log(sumAll(2, 4, 6, 3, 9, 6)); //30

// =====================  Activity 4 : Default Parameter ==================
// Task-7
function product(a, b = 1) {
  return a * b;
}
let with_2nd_parameter = product(5, 2);
let without_2nd_parameter = product(5);

// console.log(with_2nd_parameter, without_2nd_parameter);

// =====================  Activity 5 : Enhanced Object Literals ==================
// Task-8
let fruitName = "Apple";
let price = 145;
const discount = function () {
  let tenPrecent = 0.1 * price;
  return Math.floor(price - tenPrecent);
};

const fruit = { fruitName, price, discount };
// console.log(fruits);
// console.log(fruits.discount());

// Task-9
let a = "FruitName";
let p = "Price";
const Fruits = {
  [a]: "Apple",
  [p]: 130,
  discount,
};
// console.log(Fruits);
// console.log(Fruits.FruitName);
// console.log(Fruits.Price);
// console.log(Fruits.discount());
