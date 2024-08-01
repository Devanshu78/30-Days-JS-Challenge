class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  size() {
    let count = 0;
    let temp = this.head;
    while (temp) {
      temp = temp.next;
      count++;
    }
    return count;
  }
  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.log(`Invalid Index`);
      return;
    }
    let current = this.head;
    for (let i = 1; i < index; i++) {
      current = current.next;
    }
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  removelast() {
    if (this.size() === 0) {
      return;
    }
    let temp = this.head;
    for (let i = 0; i < this.size() - 1; i++) {
      temp = temp.next;
    }
    temp.next = null;
  }

  display() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data);
      temp = temp.next;
    }
  }
}

const linkedlist = new Linkedlist();
linkedlist.addFirst(4);
linkedlist.addFirst(5);
linkedlist.addFirst(6);
linkedlist.addLast(2);
linkedlist.addAt(3, 3);
console.log("Before ::");
linkedlist.display();
linkedlist.removelast();
console.log("After delete ::");
linkedlist.display();
