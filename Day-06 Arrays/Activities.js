// Task-1
function firstArr() {
  const arr = [1, 2, 3, 4, 5];
  console.log(arr);
}

// Task-2
const firstLastElement = () => {
  const arr = [1, 2, 3, 4, 5];
  console.log(
    `first element is ${arr[0]} and last element is ${arr[arr.length - 1]}`
  );
};

// Task-3
const push = () => {
  const arr = [1, 2, 3, 4, 5];
  arr.push(6);
  console.log("Pushing element at last of the array\n", arr);
  arr.push(7);
  console.log("Pushing element at last of the array\n", arr);
};

// Task-4
const pop = () => {
  const arr = [1, 2, 3, 4, 5];
  arr.pop();
  console.log("Poping last element of array\n", arr);
  arr.pop();
  console.log("Poping last element of array\n", arr);
};

// Task-5
const shift = () => {
  const arr = [1, 2, 3, 4, 5];
  arr.shift();
  console.log("Shift remove the element form first index\n", arr);
};

// Task-6
const unShift = () => {
  const arr = [1, 2, 3, 4, 5];
  arr.unshift(6);
  console.log("unShift add the element at first index\n", arr);
};

// Task-7
const isMap = () => {
  let arr = [2, 4, 6, 8, 10, 12];
  const result = arr.map((a) => a * 2);
  console.log(result);
};

// Task-8
const flt = () => {
  let arr = [23, 12, 46, 23, 56, 48, 25, 80];
  const result = arr.filter((a) => a % 2 == 0);
  console.log(result);
};

// Task-9
const reduce = () => {
  let arr = [2, 4, 6, 8, 10, 12];
  const result = arr.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
  console.log(result);
};

// Task-10
const useForLoop = () => {
  let arr = [2, 4, 6, 8, 10, 12];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

// Task-11
const useForEach = () => {
  let arr = [2, 4, 6, 8, 10, 12];
  arr.forEach((a) => console.log(a));
};

// Task-12
const twoDimensionalArray = () => {
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  for (let row = 0; row < arr.length; row++) {
    let rowVal = "";
    for (let col = 0; col < arr[row].length; col++) {
      rowVal += arr[row][col] + " ";
    }
    console.log(rowVal);
  }
  // Task-13
  console.log("Specific element ", arr[2][1]);
};

// Run all day 6 task
function day6Task() {
  firstArr();
  firstLastElement();
  push();
  pop();
  shift();
  unShift();
  isMap();
  flt();
  reduce();
  useForLoop();
  useForEach();
  twoDimensionalArray();
}

// day6Task();
