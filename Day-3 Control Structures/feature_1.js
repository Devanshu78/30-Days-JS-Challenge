// generate random number between +ve and -ve

let pos = Math.floor(Math.random() * 10);
const numbers = [-pos, pos]; // creating array of same number in -ve and +ve
console.log(numbers[0], numbers[1]); // log the array to check the value
let index = Math.floor(Math.random() * 2); // generating value between 0 and 1 to select index
if (numbers[index] > 0) {
  console.log(`${numbers[index]}`, "It's +ve");
} else if (numbers[index] === 0) {
  console.log(`${numbers[index]}`, "zero");
} else {
  console.log(`${numbers[index]}`, "is -ve");
}
