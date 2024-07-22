// Feature - 1 : Operations
import promptSync from "prompt-sync";
const prompt = promptSync();

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function remainder(a, b) {
  return a % b;
}

let a = Number(prompt("Enter your first number : "));
let b = Number(prompt("Enter your second number : "));
const opp = [add, sub, mul, div, remainder];
opp.forEach((operator) => console.log(operator(a, b)));

/*  
799 - 84 - 1.5GB
570 - 56 - 1.5GB
299 - 28 - 1.5GB
249 - 28 - 1GB
*/
