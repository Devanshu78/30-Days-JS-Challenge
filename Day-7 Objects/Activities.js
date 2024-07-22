// ===================== Activities 1 =============================
// Task 1
const bookObj = {
  title: "Way-to-Success",
  author: "Devanshu",
  year: 2025,
};
// console.log(bookObj);

// Task-2
// console.log(bookObj.title, "and", bookObj.author);

// ===================== Activities 2 =============================
// Task-3
const bookObjWithMethod = {
  title: "Way-to-Success",
  author: "Devanshu",
  year: 2025,
  getDetail: () => {
    let str = `${bookObjWithMethod.title} and ${bookObjWithMethod.author}`;
    return str;
  },
};

// console.log(bookObjWithMethod.getDetail());

// Task-4
bookObjWithMetho.updateYear = (y) => {
  bookObjWithMethod.year = y;
};
// bookObjWithMethod.updateYear(2020);
// console.log(bookObjWithMethod);

// ===================== Activities 3 =============================

// Task-5
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
// console.log(library);

// Task-6
// console.log(library.name);
// library.books.map((book) => console.log(book.title));

// ===================== Activities 4 =============================

// Task-7
bookObj.display = function () {
  let str = `${this.title} and ${this.author}`;
  return str;
};
// console.log(bookObj.display());

// ===================== Activities 5 =============================

// Task-8
function task8() {
  for (const book in bookObj) {
    console.log(`${book} : ${bookObj[book]}`);
  }
}

// Task-9
function task9() {
  console.log(Object.keys(bookObj));
  console.log(Object.values(bookObj));
}
