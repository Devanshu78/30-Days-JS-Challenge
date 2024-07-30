let a = 4;
let b = 4;

function operator(a, b) {
  console.log(`${a} > ${b}`, a > b);
  console.log(`${a} >= ${b}`, a >= b);
  console.log(`${a} < ${b}`, a < b);
  console.log(`${a} <= ${b}`, a <= b);
  console.log(`${a} == ${b}`, a == b);
  console.log(`${a} === ${b}`, a === b);
}
function Logical(a, b) {
  console.log("");
  if (a > b && a > 0) {
    console.log(a);
  } else {
    if (b > 0 || b > a) {
      console.log(b);
    }
  }
}
