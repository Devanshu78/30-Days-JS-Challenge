// Feature - 1
const book = {
  title: "Way-to-Success",
  author: "Devanshu",
  year: 2025,
  display: function () {
    let str = `${this.title} and ${this.author}`;
    return str;
  },
};

// console.log(book);

//Feature-2

const library = {
  name: "Devanshu Library",
  books: [
    { title: "Epic Shit", author: "Ankur", year: 2020 },
    { title: "DO Epic Shit", author: "Ankur", year: 2022 },
    { title: "GOAT Shit", author: "Ankur Sanwal", year: 2023 },
    { title: "2 State", author: "Chetan", year: 2012 },
    { title: "Half Girlfriend", author: "Chetan", year: 2013 },
  ],
};

// console.log(library); // log complete detail

// Feature -3
function feat3() {
  for (const key in book) {
    console.log(`${key} : ${book[key]}`);
  }
  console.log("\nAll keys of book Object:\n", Object.keys(book));
  console.log("\nAll values of book Object:\n", Object.values(book));
}
feat3();
