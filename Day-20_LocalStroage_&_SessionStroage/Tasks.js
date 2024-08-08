//  ===================== Activity 1 : Understanding LocalStorage ==========================
// Task-1 store string in local storage
const string = "Hello to local Storage";
localStorage.setItem("string", string);
document.getElementById("str").innerHTML = localStorage.getItem("string");

// Task-2 store object in local storage
const userData = {
  username: "Devanshu",
  age: "20",
  profile: "Developer",
  github: "https://github.com/Devanshu78",
};
localStorage.setItem("user_detail", JSON.stringify(userData));
const getData = JSON.parse(localStorage.getItem("user_detail"));
document.getElementById("objData").innerHTML = ` 
    <p>username : ${getData.username},</p>
    <p>age : ${getData.age},</p>
    <p>profile : ${getData.profile},</p>
    <p>Github : ${getData.github}</p>
`;

// Task-3 Submiting form data, store it and display
const formData = {
  name: "",
  email: "",
};
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  const fname = document.getElementById("name");
  const femail = document.getElementById("email");
  formData.name = fname.value;
  formData.email = femail.value;
  localStorage.setItem("Form Data", JSON.stringify(formData));
  fname.value = "";
  femail.value = "";
  showFormData();
});
function showFormData() {
  const retrieve = JSON.parse(localStorage.getItem("Form Data"));
  document.getElementById(
    "show"
  ).innerHTML = `<p>Name : ${retrieve?.name}</p><p>Email : ${retrieve?.email}</p>`;
}
showFormData();

// Task-4 remove item from Local storage
const grabage = "212etgt68i%$^&^*TFVI&*^%&*ITG";
localStorage.setItem("remove", grabage);
console.log("Befor Delete ", localStorage.getItem("remove"));
localStorage.removeItem("remove");
console.log("After Delete", localStorage.getItem("remove"));

// Task-5 store string in session storage
sessionStorage.setItem("sessString", "hello to session storage");
document.getElementById("sess_String").innerHTML =
  sessionStorage.getItem("sessString");

// Task-6 set object to session storage
const userData1 = {
  username: "Aayush Rai",
  age: "21",
  profile: "Junior Developer",
  github: "https://github.com/aayushrai",
};

sessionStorage.setItem("Session Object", JSON.stringify(userData1));
const sessData = JSON.parse(sessionStorage.getItem("Session Object"));
document.getElementById("session_object").innerHTML = ` 
    <p>username : ${sessData.username},</p>
    <p>age : ${sessData.age},</p>
    <p>profile : ${sessData.profile},</p>
    <p>Github : ${sessData.github}</p>
`;

// Task-7 Input data in Session
const sessformData = {
  name: "",
  email: "",
};
const Sbtn = document.querySelector(".sessbtn");
Sbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const fname = document.getElementById("Sname");
  const femail = document.getElementById("Semail");
  sessformData.name = fname.value;
  sessformData.email = femail.value;
  sessionStorage.setItem("Form Data", JSON.stringify(sessformData));
  fname.value = "";
  femail.value = "";
  showsessFormData();
});
function showsessFormData() {
  const retrieve = JSON.parse(sessionStorage.getItem("Form Data"));
  document.getElementById(
    "showSessData"
  ).innerHTML = `<p>Name : ${retrieve?.name}</p><p>Email : ${retrieve?.email}</p>`;
}
showsessFormData();

// Task-8 Grabage String in Session
const grabageSession = "2873ttwdbhjfDJHFUQ@&^&*@";
sessionStorage.setItem("Session", grabageSession);
console.log("Session :: ", sessionStorage.getItem("Session"));
sessionStorage.removeItem("Session");
console.log("Session :: ", sessionStorage.getItem("Session"));

// Task-9 function to store data
function storage(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
}
storage("function", "String save in both local and session");
console.log("output for local :: ", localStorage.getItem("function"));
console.log("output from session :: ", sessionStorage.getItem("function"));

// Task-10
function clearAll() {
  localStorage.clear();
  sessionStorage.clear();
}
// clearAll();
