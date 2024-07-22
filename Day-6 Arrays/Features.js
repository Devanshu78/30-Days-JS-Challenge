// Feature-1
const arrayManipulation = () => {
  const arr = [1, 2, 3, 4, 5];
  console.log("creation of array : ", arr);

  console.log("\nadding element at last of the array,");
  arr.push(6);
  console.log("Pushing element at last of the array\n", arr);

  console.log("\nremoving element form the last of the array,");
  arr.pop();
  console.log("Poping element at last of the array\n", arr);

  console.log("\nadding element at the first index of the array");
  arr.unshift(7);
  console.log(arr);

  console.log("\nremoving element form the first index of the array");
  arr.shift();
  console.log(arr);
};

// Feature-2
const data = [
  { firstName: "Rahul", lastName: "Pandey", age: 21 },
  { firstName: "Sam", lastName: "Alt Man", age: 48 },
  { firstName: "Yash", lastName: "Dubye", age: 23 },
  { firstName: "Ansh", lastName: "Pathak", age: 32 },
  { firstName: "Aayush", lastName: "Rai", age: 32 },
  { firstName: "Ankur", lastName: "Sanwal", age: 29 },
  { firstName: "Aman", lastName: "Arora", age: 29 },
];

const useMap = data.map((per) => per.firstName + " " + per.lastName);

const useFilter = data
  .filter((per) => per.age > 25)
  .map((per) => per.firstName + " " + per.lastName);

const useReduce = data.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

// Feature-3
const iterate = () => {
  const arr = [23, 45, 67, 24, 27, 78];
  console.log("Iterate using for Loop");
  for (let i = 0; i < arr.length; i++) {
    console.log(i + " : " + arr[i]);
  }
  console.log("\nIterate using forEach Loop");
  arr.forEach((value, index) => console.log(`${index} : ${value}`));
};

//Feature-4
const twoDimensionalArray = () => {
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  console.log("Array : ", arr);

  console.log("2-D Matrix : ");
  for (let row = 0; row < arr.length; row++) {
    let arrVal = "";
    for (let col = 0; col < arr[row].length; col++) {
      arrVal += arr[row][col] + " ";
    }
    console.log(arrVal);
  }

  console.log("Specific element ", arr[1][2]);
};

// Day-6 All Feature
function Day6Features() {
  arrayManipulation();
  console.log(useMap);
  console.log(useFilter);
  console.log(useReduce);
  iterate();
  twoDimensionalArray();
}
