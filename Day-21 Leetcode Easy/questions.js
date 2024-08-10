// Task-1 :: Leetcode problem number 1 :: Two sum
function twosum(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == key) {
        return [i, j];
      }
    }
  }
}
// Time Complexity = O(n^2) ; Space Complexity = O(1);
let sum = [1, 2, 3, 4, 5];
let [i, j] = twosum(sum, 6);
// console.log(i, j);

// Task-2 :: Leetcode Problem number 7 :: Reverse Integer
function rev(int) {
  let result = "";
  while (int > 0) {
    let n = int % 10;
    result += n;
    int = Math.floor(int / 10);
  }
  console.log(result);
  return result;
}

// rev(123);
// rev(234);
// rev(3466);
// rev(1);

// Task-3 :: Leetcode Problem number 9 :: Palindrome Number
function isPalindrom(num) {
  let result = "";
  let int = num;
  while (int > 0) {
    let n = int % 10;
    result += n;
    int = Math.floor(int / 10);
  }

  if (result == num) {
    console.log(`yes it's palindrome`);
    return;
  }
  console.log(`no it's not palindrome`);
  return;
}
// isPalindrom(121);
// isPalindrom(123);

// Task-4 :: Leetcode Problem number 21 :: Merge Two sorted list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class ll {
  constructor() {
    this.head = null;
  }
  add(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (this.head == null) {
        const newNode = new Node(arr[i]);
        newNode.next = this.head;
        this.head = newNode;
      } else {
        const newOne = new Node(arr[i]);
        let curr = this.head;
        while (curr.next) {
          curr = curr.next;
        }
        curr.next = newOne;
      }
    }
  }
  addOne(data) {
    const newNode = new Node(data);
    if (!this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
  }
  display() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

function merge(list1, list2) {
  const list3 = new ll();
  const l1 = list1.head;
  const l2 = list2.head;
  let temp1 = l1;
  let temp2 = l2;
  while (temp1 && temp2) {
    if (temp1.data <= temp2.data) {
      list3.addOne(temp1.data);
      temp1 = temp1.next;
    } else {
      list3.addOne(temp2.data);
      temp2 = temp2.next;
    }
  }
  while (temp1) {
    list3.addOne(temp1.data);
    temp1 = temp1.next;
  }
  while (temp2) {
    list3.addOne(temp2.data);
    temp2 = temp2.next;
  }
  return list3;
}

let arr = [1, 3, 4];
let arr2 = [1, 2, 4];
let list1 = new ll();
list1.add(arr);
let list2 = new ll();
list2.add(arr2);
const sortedList = merge(list1, list2);
// sortedList.display();

// Task-5 :: Leetcode Problem number 20 :: Valdi Parentheses
function valdi(str) {
  let temp = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      temp.push(str[i]);
    } else {
      if (temp.length == 0) {
        return false;
      } else {
        let c = temp.pop();
        if (
          (str[i] == ")" && c !== "(") ||
          (str[i] == "}" && c !== "{") ||
          (str[i] == "]" && c !== "[")
        ) {
          return false;
        }
      }
    }
  }
  if (temp.length == 0) {
    return true;
  }
  return false;
}

console.log(valdi("{()[]}"));
