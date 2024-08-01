class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const n1 = new Node(3);
n1.left = new Node(2);
n1.right = new Node(4);
console.log(n1);

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertAt(this.root, newNode);
    }
  }

  insertAt(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertAt(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertAt(root.right, newNode);
      }
    }
  }

  inOrderTraversal(root = this.root) {
    // console.log(root);
    if (root !== null) {
      this.inOrderTraversal(root.left);
      console.log(root.value);
      this.inOrderTraversal(root.right);
    }
  }
}

const b1 = new BinaryTree();
b1.insert(10); //  root
b1.insert(5); // left
b1.insert(18); // right
b1.insert(2); // left -> left
b1.insert(7); // left -> right
b1.insert(12); // right -> left
b1.insert(22); // right -> right

b1.inOrderTraversal();

/*
            10 
        5        18
    2     7  12    22
*/
