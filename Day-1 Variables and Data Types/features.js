// Feature - 1
let arr = [4, "Dev", true, [2, 3, 4], { first: "apple", second: "banana" }];
arr.map((item) => {
  console.log(item, typeof item);
});

// Feature - 2
let age = 34;
const firstname = "Devanshu";
try {
  console.log(age, typeof age);
  age = "45";
  console.log(age, typeof age);
  console.log(firstname, typeof firstname);
  firstname = "Rahul";
} catch (error) {
  console.log(error.message);
}
