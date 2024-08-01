// Stack implementation using LinkedList
// Stack implementation using Array

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack_using_linkedlist {
  constructor() {
    this.head = null;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let temp = this.head;
    let count = 0;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }

  pop() {
    if (this.size() === 0) {
      console.log("Nothing to pop");
      return;
    }
    let dump = this.head;
    this.head = this.head.next;
    return dump.data;
  }

  peek() {
    if (this.size() == 0) {
      console.log("Nothing present in stack");
      return;
    }
    console.log(this.head.data);
  }

  display() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

const stack = new Stack_using_linkedlist();
// Pushing data into stack
// In linkedlist impelementaion I'm pushing data on top of another data as actually satck we see, which means the data u enter first will we last in satck.
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log("Display Stack in");
stack.display();

// Checking peek value in stack
console.log("PeeK Value");
stack.peek();

// pop operation on stack
console.log("Pop");
stack.pop();
stack.display();

console.log("Pop");
stack.pop();
stack.display();

console.log("Pop");
stack.pop();
stack.display();

console.log("Pop");
stack.pop();
stack.display();

// Stack implementation using Array
class Stack_using_Array {
  constructor() {
    this.stack = [];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  push(ele) {
    this.stack.push(ele);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
      return;
    }
    return this.stack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
      return;
    }
    return this.stack[this.stack.length - 1];
  }
  display() {
    for (let i = 0; i < this.stack.length; i++) {
      console.log(this.stack[i]);
    }
  }
}

const stack1 = new Stack_using_Array();
console.log("Stack using Array");
stack1.push(11);
stack1.push(12);
stack1.push(13);
stack1.push(14);
stack1.push(15);
stack1.display();

console.log("POP", stack1.pop());
console.log("PEEK ", stack1.peek());

// Task-4 :: we can use array or linkedlist the output remain same
function reverseString(str) {
  if (str == "") {
    return `invalid string provided`;
  }
  let stack = new Stack_using_Array();
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += stack.pop();
  }
  return `reversed string is ${result}`;
}

console.log(reverseString("happy"));
console.log(reverseString("123"));
console.log(reverseString(""));
console.log(reverseString("honey"));
