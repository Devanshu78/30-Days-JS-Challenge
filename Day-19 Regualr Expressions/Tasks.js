// ======================= Activity 1 : Basic Regular Expressions ===============
// Task-1  : string matching
const text1 = "JS is the best language. JS is the fast growing language";
const regext1 = /JS/g;
const match = text1.match(regext1);
console.log(match);

// Task-2 Number in String
const text2 = "Devanshu8612378";
const findNumber = /[0-9]/g;
const numbers = text2.match(findNumber);
console.log(numbers);

// Task-3 Captial Letter
const text3 = "Devanshu Is The Best Person";
const captialLetter = /[A-Z]/g;
const letter = text3.match(captialLetter);
console.log(letter);

// Task-4 Multiple digit.
const manydigit = "13214";
const num_regex = /\d+/;
const task4 = manydigit.match(num_regex);
console.log(task4[0]);

// Task-5 US Number format
const usNumber = "(123) 234-3245";
const regex = /\((\d{3})\) (\d{3})-(\d{4})/;
const ph_number = usNumber.match(regex);
console.log(
  `area code = ${ph_number[1]} \noffice_code = ${ph_number[2]} \nLine Number = ${ph_number[3]}`
);

// Task-6 Username and Domain from Email.
const email = "example123@gmail.com";
const email_regex = /([^@]+)@([^@]+)/;
const task6 = email.match(email_regex);
console.log(`username : ${task6[1]} \ndomain : ${task6[2]}`);

// Task-7 and Task-8 Beginning and Ending of string.
const beginning = "The dog is stronger then cat";
const beginning_regex = /^[A-Za-z\d]+/;
const ending_regex = /[A-Za-z\d\.]+$/;
const firstWord = beginning.match(beginning_regex);
const lastWord = beginning.match(ending_regex);
console.log(`Starting : '${firstWord[0]}' , ending : '${lastWord[0]}'`);

// Task-9 Strong Password
/* one Upper case , one lower case , one digit , one special */
const password = "ASjd23$";
const st_password = /([A-Z]{1,})+([a-z]{1,})+(\d{1,})([*+-_\/\.\$%@!\^]{1,})/;
if (password.match(st_password)) {
  console.log("Your password is stronger then 99% people");
} else {
  console.log("create strong password");
}

// Task-10 URL
const URL = "https://chaicode.com";
const url = /[https:\/\/ | HTTPS:\/\/]+[a-zA-Z]+\.[a-z]{2,}/;
if (URL.match(url)) {
  console.log(`"${URL}" ::  this is correct url`);
} else {
  console.log("Not correct URL");
}
