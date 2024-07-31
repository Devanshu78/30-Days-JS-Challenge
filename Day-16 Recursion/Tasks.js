// Task-1 : Factorial
function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return factorial(num - 1) * num;
}
// console.log("Factorial of 4,5,6 is", factorial(4), factorial(5), factorial(6));

// Task-2 : Fibonacci
function fibonacci(num) {
  if (num <= 1) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
// console.log("Fibonacci of 7,8,9 is", fibonacci(7), fibonacci(8), fibonacci(9));

// Task-3
function arraySum(arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sum = arr[0] + arraySum(arr.splice(1, arr.length));
  return sum;
}
let arrSum1 = [2, 3, 4, 5, 6];
let arrSum2 = [1, 2, 3, 7, 9];
let arrSum3 = [0, 11, 2, 5, 12];
// console.log(arraySum(arrSum1)); // 20
// console.log(arraySum(arrSum2)); // 22
// console.log(arraySum(arrSum3)); // 30

// Task-4
function maxInArray(arr) {
  let result;
  let len = arr.length - 1;
  if (arr.length >= 1) {
    if (arr[0] < arr[len]) {
      result = arr[len];
    }
    maxInArray(arr.splice(0, len));
  }
  return `max element in your array is ${result}`;
}

let max1 = [2, 3, 4, 5, 6];
let max2 = [8, 3, 4, 5, 6];
let max3 = [2, 3, 5, 6, 11, 2, 4, 9, 10];
// console.log(maxInArray(max1)); // 6
// console.log(maxInArray(max2)); // 8
// console.log(maxInArray(max3)); // 11

// Task-5
function reverseString(str) {
  if (str == "") {
    return "";
  }
  return reverseString(str.substr(1)) + str.charAt(0);
}
// console.log(reverseString("Devanshu"));
// console.log(reverseString("Aman"));
// console.log(reverseString("Jhon"));

// Task-6
// There is one more method :- we can use reverseString function, then compare result.

function isPalindrom(str) {
  let result = false;
  let end = str.length - 1;
  if (str.length > 0) {
    if (str[0] === str[end]) {
      result = true;
      isPalindrom(str.slice(1, end));
    }
  }
  // console.log();
  return `Give string '${str}' is palindrom? -> ${result}`;
}
// console.log(isPalindrom("noon")); // true
// console.log(isPalindrom("moon")); // fasle
// console.log(isPalindrom("noomoon")); // true
// console.log(isPalindrom("noomnoon")); // fasle

// Task-7
function binarySearch(arr, start, end, key) {
  let mid = Math.floor((start + end) / 2);
  if (start >= end) {
    console.log(`${key} is not present in array`);
    return;
  }
  if (arr[mid] == key) {
    console.log(`${key} is found at index of ${mid}`);
  }
  if (arr[mid] < key) {
    binarySearch(arr, mid + 1, end, key);
  }
  if (key < arr[mid]) {
    binarySearch(arr, start, mid, key);
  }
}

let t7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// binarySearch(t7, 0, 9, 4);
// binarySearch(t7, 0, 9, 1);
// binarySearch(t7, 0, 9, 9);
// binarySearch(t7, 0, 9, 11);

// Task-8
function repeate(arr, key) {
  let ct = 0;
  function count(arr, key) {
    let len = arr.length;
    if (0 < len) {
      if (key == arr[len - 1]) {
        ct++;
      }
      count(arr.slice(0, len - 1), key);
    }
  }
  count(arr, key);
  console.log(`occurence of target ${key} is = ${ct}`);
}
let t8 = [1, 2, 2, 2, 2, 3, 4, 5];
// repeate(t8, 2);
// repeate(t8, 3);
// repeate(t8, 1);
// repeate(t8, 9);
