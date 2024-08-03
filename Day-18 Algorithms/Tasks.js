// ================= Sorting Algorithms ============================

// Task 1 :: Bubble sort
function swap(a, b) {
  let c = a;
  a = b;
  b = c;
  return [a, b];
}

function bubble(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let [a, b] = swap(arr[j], arr[j + 1]);
        arr[j] = a;
        arr[j + 1] = b;
      }
    }
  }
  return arr;
}

let arr23 = [3, 5, 6, 6, 8, 2];
console.log("Bubble Sort ", bubble(arr23));

// Task-2 :: Selection Sort
function selection(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    let [a, b] = swap(arr[i], arr[min]);
    arr[i] = a;
    arr[min] = b;
  }
  return arr;
}
console.log("Selection Sort ", selection(arr23));

// Task-3 :: Quick Sort
function pivot(arr, low, high) {
  let pivotElement = arr[low];
  let i = low;
  let j = high;
  while (i < j) {
    while (arr[i] <= pivotElement && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivotElement && j >= low - 1) {
      j--;
    }
    if (i < j) {
      let [a, b] = swap(arr[i], arr[j]);
      arr[i] = a;
      arr[j] = b;
    }
  }
  let [a, b] = swap(arr[low], arr[j]);
  arr[low] = a;
  arr[j] = b;
  return j;
}

function quick(arr) {
  let low = 0;
  let high = arr.length - 1;
  if (low < high) {
    let pivotElement = pivot(arr, low, high);
    pivot(arr, low, pivotElement - 1);
    pivot(arr, pivotElement + 1, high);
  }
  return arr;
}
let arr = [6, 2, 5, 9, 4];
console.log("Quick sort ", quick(arr));

// ========================= Searching Algorithms =========================

// Task-4 :: Linear Search
function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == key) {
      return true;
    }
  }
  return false;
}

let arrS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Linear Search ", linearSearch(arrS, 1));

// Task-5 :: Binary Search
function binarySearch(arr, s, e, key) {
  if (s == e) {
    return false;
  }
  let mid = Math.floor(s + (e - s) / 2);
  if (arr[mid] == key) {
    return true;
  } else if (arr[mid] < key) {
    return binarySearch(arr, mid + 1, e, key);
  } else {
    return binarySearch(arr, s, mid, key);
  }
}
console.log("Binary Search", binarySearch(arrS, 0, arrS.length - 1, 2));

// =========================  String Algorithms ===================================

// Task-6 :: count of max character.
function maxChar(str) {
  let obj = {};
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        count++;
      }
    }
    if (!(str[i] in obj)) {
      obj[str[i]] = count;
    }
    count = 1;
  }
  Object.keys(obj).map((key) => {
    if (obj[key] > 1) {
      console.log(`${key} -> ${obj[key]}`);
    }
  });
}

maxChar("Devanssssshu");
maxChar("frree");
maxChar("eye");

// Task-7 :: Longest substring without char. repeat
function subString(str) {
  let hash = [];
  let n = str.length;
  let l = 0;
  let r = 0;
  let maxLength = 0;
  while (r < n) {
    if (hash[str[r]]) {
      if (hash[str[r]] > l) {
        l = hash[str[r]] + 1;
      }
    }
    let len = r - l + 1;
    maxLength = Math.max(len, maxLength);
    hash[str[r]] = r;
    r++;
  }
  return maxLength;
}

console.log("max length of sub string ", subString("freshs")); //5
console.log("max length of sub string ", subString("Devanshu")); //8
console.log("max length of sub string ", subString("noon")); //2

// ========================== Array Algorithms ===========================

//Task-8 :: Kth position rotate
function rotate(arr, target) {
  let res = [];
  let temp = arr.slice(arr.length - target, arr.length);
  let copy = [];
  for (let i = 0; i < arr.length - target; i++) {
    copy.push(arr[i]);
  }
  res = [...temp, ...copy];
  console.log("Rotated Array ", res);
}
let arr1 = [2, 5, 6, 8, 3];
rotate(arr1, 2); // [8,3,2,5,6]
rotate(arr1, 1); // [3,2,5,6,8]
rotate(arr1, 3); // [6,8,3,2,5]

// Task-9 :: Merge Sort and Merging two sorted array
function merge(arr, low, mid, high) {
  let arr3 = [];
  let i = low;
  let j = mid + 1;
  let k = 0;
  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) {
      arr3[k] = arr[i];
      i++;
    } else {
      arr3[k] = arr[j];
      j++;
    }
    k++;
  }
  while (i <= mid) {
    arr3[k] = arr[i];
    i++;
    k++;
  }
  while (j <= high) {
    arr3[k] = arr[j];
    j++;
    k++;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = arr3[i - low];
  }
  return arr3;
}

function mergeSort(arr, start, end) {
  if (start == end) {
    return;
  }
  let mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
  return arr;
}

function meregeArray(arr1, arr2) {
  let sortedArray = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i <= arr1.length - 1 && j <= arr2.length - 1) {
    if (arr1[i] < arr2[j]) {
      sortedArray[k] = arr1[i];
      i++;
    } else {
      sortedArray[k] = arr2[j];
      j++;
    }
    k++;
  }
  while (i < arr1.length) {
    sortedArray[k] = arr1[i];
    i++;
    k++;
  }
  while (j < arr2.length) {
    sortedArray[k] = arr2[j];
    j++;
    k++;
  }
  return sortedArray;
}

let arr3_bsmera = [1, 3, 5, 7];
let arr4_bstera = [2, 4, 6, 8];
console.log("Merging two sorted array ", meregeArray(arr3_bsmera, arr4_bstera));

let mergeArr = [5, 9, 4, 3, 7, 6];
console.log("Merge Sort ", mergeSort(mergeArr, 0, mergeArr.length - 1));

// ======================  Dynamic Programming ========================

// Task-10 :: Fibonacci Sequence using Dynamic Programming
function fibonacciDP(n) {
  if (n <= 0) {
    return [0];
  } else if (n == 1) {
    return [0];
  }
  let fibseries = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibseries[i] = fibseries[i - 1] + fibseries[i - 2];
  }
  console.log(`f${n} = ${fibseries[n]}`);
  return fibseries;
}
fibonacciDP(10);

// Task-11 :: Knapsack Problem using DP
