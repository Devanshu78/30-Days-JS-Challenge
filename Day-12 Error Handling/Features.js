// ========================= Activity 1 : Basic Error Handling ==================================
// TASK-1

const throw_error = function () {
  try {
    throw new Error("Intenionally");
  } catch (error) {
    console.error("Error is occurred ::", error.message);
  }
};
throw_error();

// TASK-2
const divide = function (a, b) {
  if (b != 0) {
    return a / b;
  } else {
    throw new Error("second number should greater then 0");
  }
};

try {
  console.log(divide(10, 2));
} catch (error) {
  console.log(error.message);
}

// ========================= Activity 2 : Finally Block ==================================
// TASK-3
try {
  console.log(divide(10, 0));
} catch (error) {
  console.log(error.message);
} finally {
  console.log("division function ends here!!!, As I always run.... ");
}

// ========================= Activity 3 : Custom  Error Object ==================================
//TASK-4
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwCustomError() {
  try {
    throw new CustomError("This is a custom error");
  } catch (error) {
    console.error("Caught an error:", error.name, ":", error.message);
  }
}

throwCustomError();

// TASK-5
class ValidateError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidateError";
  }
}

const validateString = function (str) {
  try {
    if (str.trim() == "") {
      throw new ValidateError("Given input is not string");
    }
    console.log("Valid input : ", str);
  } catch (error) {
    console.error("Caught an error:", error.name, ":", error.message);
  }
};
validateString("");
validateString("ABCD");

// ======================= Activity 4 : Error Handling in Promises =============================

// TASK-6
function createPromise() {
  return new Promise((resolve, reject) => {
    const index = Math.floor(Math.random() * 2);
    if (index === 1) {
      resolve(`promise resolved ${index}`);
    } else {
      reject(`promise failed ${index}`);
    }
  });
}
createPromise()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

// TASK-7
// using createdPromise function and applying method of asyn-await
const task7 = async function () {
  try {
    const response = await createPromise();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
task7();

// ======================= Activity 5 : Fetch Error Hanndling =============================
// TASK-8
function fetched() {
  fetch("https://doesnotexist.com")
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((e) => {
      console.error("Error occured while fetching data");
      console.error("using promise method", e.message);
    });
}
fetched();

// TASK-9
const using_async = async function () {
  try {
    const res = await fetch("https://doesnotexist.com");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error Occured while fetching data");
    console.error("using asyn method", error.message);
  }
};
using_async();
