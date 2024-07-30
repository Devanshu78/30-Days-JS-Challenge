let str = "";
for (let i = 0; i < 4; i++) {
  str += Math.ceil(Math.random() * 9).toString();
}
let year = parseInt(str);
if (year % 4 == 0 && year % 100 !== 0 && year % 400 === 0) {
  console.log(`${year}`, "it's leap year");
} else {
  console.log(`${year}`, "It's not a leap year");
}
