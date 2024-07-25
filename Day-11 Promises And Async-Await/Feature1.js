// ======================= Activity - 1 Understanding Promises =================
// Task-1
const promises1 = new Promise(function (response, reject) {
  setTimeout(() => {
    response("Hii, Promises One is resolved in 2 sec.");
  }, 2000);
});
// promises1.then((result) => console.log(result)).catch();

// Task-2
const promises2 = new Promise(function (response, reject) {
  const error = true;
  if (!error) {
    setTimeout(() => {
      response("Promises two is resolved");
    }, 2000);
    response();
  } else {
    reject("Promises two is failed to resolved");
  }
});
promises2.then((data) => console.log(data)).catch((e) => console.log(e));

// ======================= Activity - 2 Chaining Promises =================

// Task - 3

new Promise(function (response, reject) {
  setTimeout(() => {
    response({ username: "Devanshu" });
  }, 2000);
})
  .then((data) => {
    // console.log(data);
  })
  .catch((e) => console.log(e));

// ======================= Activity - 3 Using async-awit =================
// Task-4
const promises4 = new Promise(function (response, reject) {
  setTimeout(() => {
    response({ lang: "JavaScript" });
  }, 2000);
});

const runPromises4 = async function () {
  const data = await promises4;
  console.log(data.lang);
};
// runPromises4();

// Task-5
const promises5 = new Promise(function (response, reject) {
  setTimeout(() => {
    reject("failed");
  }, 2000);
});

const runPromises5 = async function () {
  try {
    const data = await promises5;
    console.log(data.lang);
  } catch (error) {
    console.log("Error in Promises 5 :: ", error);
  }
};
runPromises5();

// ======================= Activity - 4 Fetching Data From API =================
// Task-6
fetch("https://api.github.com/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);
  })
  .catch((e) => console.log(e));

// Task-7
const promises7 = async function () {
  try {
    const response = await fetch("https://api.github.com/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error in Promises 7::", error.message);
  }
};
// promises7();

// ======================= Activity - 5 Concurrent Promises =================
// Task-8
const createPromises = function (value) {
  return function (response, reject) {
    setTimeout(() => {
      response(value);
    }, 1000);
  };
};
const p10 = new Promise(createPromises(10));
const p11 = new Promise(createPromises(20));
const p12 = new Promise(createPromises(30));
const p13 = new Promise(createPromises(40));
Promise.all([p10, p11, p12, p13])
  .then((result) => console.log("Result By Promises all method: ", result))
  .catch((e) => console.log("Failed :: ", e));

// Task-9
Promise.race([p10, p11, p12, p13])
  .then((result) =>
    console.log(`we get result as ${result} becoz of Promises Race method`)
  )
  .catch((e) => console.log("Failed ::", e));
