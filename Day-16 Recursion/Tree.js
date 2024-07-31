// Both task is inspired by someone else.
// Task-9
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrder(node) {
  if (node != null) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
}

const root = new Node(6);
root.left = new Node(4);
root.right = new Node(9);
root.left.left = new Node(2);
root.left.right = new Node(3);
root.right.left = new Node(7);
root.right.right = new Node(10);

inOrder(root);

// Task-10
function depth(node) {
  if (node == null) {
    return 0;
  }
  let left = depth(node.left);
  let right = depth(node.right);
  return Math.max(left, right) + 1;
}

console.log(depth(root));
root.left.left.left = new Node(1);
console.log(depth(root));
