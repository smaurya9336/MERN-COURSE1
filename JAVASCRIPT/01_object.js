//Object literals

const student = {
  name: "Sarita Maurya",
  email: "sarita@gmail.com",
  age: 23,
  marks: 94.6,
  city: "Lucknow",
};
student.email = "sm7767119@gmail.com";
Object.freeze(student);
student.email = "harshbbk@gmail.com";
// console.log(student);

const item = {
  price: 100.99,
  discount: 50,
  colors: ["red", "pink"],
};
// console.log(item);

const post = {
  username: "@Sarita-Maurya",
  content: "photos",
  likes: 150,
  reposts: 5,
  tages: ["harsh", "arti", "mayank", "harshit"],
};

// console.log(post);

const students = {
  name: "harsh",
  marks: 89,
};

// console.log(students["name"]);
// console.log(students.name);

const std = {
  name: "shradha",
  age: 23,
  marks: 90,
  city: "Delhi",
};

std.gender = "female";
std.marks = "A";
// delete Object.marks;
// console.log(std);

const classInfo = {
  aman: {
    grade: "A+",
    clgname: "abc",
  },
  sarita: {
    grade: "B+",
    city: "Delhi",
  },
};

// console.log(classInfo.aman.grade);
// console.log(classInfo.sarita);

// Array of Object

const classInfo1 = [
  {
    name: "Sarita Maurya",
    email: "sarita@google.com",
    course: "Btech",
    branch: "CSE",
    year: "3rd",
  },
  {
    name: "Harsh Verma",
    email: "harshbbk@gmail.com",
    course: "Btech",
    branch: "EE",
    year: "2nd",
  },
  {
    name: "Mayank Verma",
    email: "mayank123@gmail.com",
    course: "Btech",
    branch: "CSE",
    year: "3rd",
  },
];

console.log(classInfo1);
console.log(classInfo1[1]);
console.log(classInfo1[2].name);
