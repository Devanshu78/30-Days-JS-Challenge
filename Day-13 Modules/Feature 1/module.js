// Task 1
// Add function
module.exports.add = function (a, b) {
  return a + b;
};

// Task 2
// user detail
const user = {
  firstname: "Devanshu",
  lastname: "Pandey",
  islogedIn: true,
  isAdmin: false,
  greeting: function () {
    return `Hello ${this.firstname} ${this.lastname}.`;
  },
};

module.exports.userdetail = user;
