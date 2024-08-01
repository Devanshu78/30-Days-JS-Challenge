class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue_using_linkedlist {
  constructor() {
    this.head = null;
  }

  display() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
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

  enqueue(data) {
    const newNode = new Node(data);
    if (this.size() === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let temp = this.head;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  dequeue() {
    if (this.size() === 0) {
      console.log("Queue is empty");
      return;
    }
    let dump = this.head;
    this.head = this.head.next;
    return dump.data;
  }

  front() {
    if (this.size() == 0) {
      console.log("Queue is empty");
      return;
    }
    let temp = this.head;
    console.log(temp.data);
    return temp.data;
  }
}

const queue = new Queue_using_linkedlist();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.display();
console.log("Front");
queue.front();

queue.dequeue();
console.log("After dequeue");
queue.display();

console.log("Front");
queue.front();

function printer() {
  const q = new Queue_using_linkedlist();
  q.enqueue(" 1) Connect with Printer");
  q.enqueue(" 2) press 'ctrl + p' in windows");
  q.enqueue(" 3) adjust the documnet");
  q.enqueue(" 4) click on print!!!");
  q.display();
  console.log("");
  console.log(q.dequeue(), "[ DONE ] \n");
  console.log(q.dequeue(), "[ DONE ] \n");
  console.log(q.dequeue(), "[ DONE ] \n");
  console.log(q.dequeue(), "[ DONE ] \n");
}

printer();

class Queue_using_Array {
  constructor() {
    this.queue = [];
  }

  size() {
    return this.queue.length;
  }

  enqueue(data) {
    this.queue.push(data);
  }
  dequeue() {
    if (this.size() == 0) {
      console.log("Queue is empty");
      return;
    }
    return this.queue.shift();
  }

  front() {
    if (this.size() == 0) {
      console.log("Queue is empty");
      return;
    }
    return this.queue[0];
  }
  display() {
    for (let i = 0; i < this.queue.length; i++) {
      console.log(this.queue[i]);
    }
  }
}

const q1 = new Queue_using_Array();
q1.enqueue(22);
q1.enqueue(23);
q1.enqueue(24);
q1.enqueue(25);
console.log("Array implementaion :: ");
q1.display();
console.log("Size of queue", q1.size());
console.log("Front", q1.front());
console.log("Dequeue", q1.dequeue());
console.log("Front", q1.front());
