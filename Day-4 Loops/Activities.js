//Task-1
for (let i = 0; i < 10; i++) {
  //   console.log(i + 1);
}

// Task-2
for (let i = 0; i < 10; i++) {
  //   console.log((i + 1) * 5);
}

// Task-3
let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
// console.log(sum);

//Task-4
let x = 10;
while (x > 0) {
  //   console.log(x);
  x--;
}

//Task-5
let q = 1;
do {
  //   console.log(q);
  q++;
} while (q <= 5);

//Task-6
let num = 10;
let fact = num;
do {
  fact *= num - 1;
  num--;
} while (num > 1);
// console.log(fact);

//Task-7
for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 0; j < i; j++) {
    str += "*";
  }
  //   console.log(str);
}

//Task -8
for (let i = 1; i <= 10; i++) {
  if (i == 5) continue;
  //   console.log(i);
}

//Task -9
for (let i = 1; i <= 10; i++) {
  if (i == 7) break;
  //   console.log(i);
}
