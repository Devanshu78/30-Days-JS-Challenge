// Task-1 :: Leetcode Problem number 2 :: Add Two Numbers
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
}

function revStr(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return Number(result);
}

function addTwoNumbers(list1, list2) {
  let temp1 = list1;
  let temp2 = list2;
  let result1 = "";
  let result2 = "";

  while (temp1) {
    result1 += temp1.data;
    temp1 = temp1.next;
  }
  while (temp2) {
    result2 += temp2.data;
    temp2 = temp2.next;
  }

  let sum = revStr(result1) + revStr(result2);
  let revSum = revStr(String(sum));

  const list3 = new LinkedList();
  let n = revSum;
  while (n > 0) {
    let s = n % 10;
    list3.add(s);
    n = Math.floor(n / 10);
  }
  //   return list3.head.data;  // Only return head.
  return list3.head; // return complete list
}

const list1 = new LinkedList();
list1.add(3), list1.add(4), list1.add(2);
const list2 = new LinkedList();
list2.add(4), list2.add(6), list2.add(5);
const list = addTwoNumbers(list1.head, list2.head);
console.log(list);

// Task-2 :: Leetcode Problem number 3 :: Longest Substring Without Repeating Characters
function longestSubString(str) {
  if (str.length < 2) {
    return str.length;
  }
  const map = {};
  let front = 0,
    back = 0,
    maxLength = 0;
  for (; front < str.length; front++) {
    const exist = map[str[front]];
    if (exist !== undefined && back <= exist) {
      back = exist + 1;
    }
    map[str[front]] = front;
    maxLength = Math.max(front - back + 1, maxLength);
  }
  return maxLength;
}

console.log(longestSubString("Devanshu"));
console.log(longestSubString("abcdebc"));

// Task-3 :: LeetCode Problem Number 11 :: Container with most water
function maxArea(height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
// console.log(maxArea([1, 1]));

// Task-4 :: LeetCode Problem Number 15 :: 3Sum
function threeSum(nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) {
          left++;
        }
        while (nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// Task-5 :: LeetCode Problem Number 49 :: Group Anagrams
function groupAnagrams(strs) {
  let map = {}; // Map  : key = sorted string, value = list of strings
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let sorted = str.split("").sort().join("");
    if (!(sorted in map)) {
      map[sorted] = [str];
    } else {
      map[sorted].push(str);
    }
  }
  return Object.values(map);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
