const { add, sub, multiply } = require("./module.js");
const greeting = require("./default_module");

// Task-3
console.log("addition", add(3, 4));
console.log("substitution", sub(5, 2));
console.log("multiplication", multiply(2, 3));

// Task-4
console.log(greeting("devanshu"));
