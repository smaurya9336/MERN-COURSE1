let arr = [1, 2, 3, 4, 5];
arr.forEach(function (item) {
  console.log(item);
});

arr.forEach((i) => {
  console.log(i);
});

let arr1 = [
  {
    name: "sarita maurya",
    branch: "CSE",
    year: "3rd",
    email: "sarita123@gmail.com",
  },
  {
    name: "shalini maurya",
    branch: "IT",
    year: "2nd",
    email: "shalini234@gmail.com",
  },
];

arr1.forEach((Student) => {
  console.log(Student.name);
});
console.log(arr1);
