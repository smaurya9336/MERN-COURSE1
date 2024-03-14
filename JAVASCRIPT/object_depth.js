// const mySym = Symbol("key1");

// let userName = {
//   firstName: "sarita",
//   lastName: "maurya",
//   "full name": "Sarita Maurya",
//   email: "sm7767119@gmail.com",
//   age: 23,
//   [mySym]: "mykey",
//   isLoggedIn: false,
//   lastLoginDays: ["Monday", "Saturday"],
// };
// console.log(userName.email);
// console.log(userName.firstName);
// console.log(userName.lastName);
// console.log(userName["full name"]);
// console.log(userName.age);
// console.log(userName[mySym]);

// userName.email = "harshbbk@gmail.com";
// //Object.freeze(userName);
// userName.email = "sarita@microsoft.com";
// console.log(userName);

// userName.greeting = function () {
//   console.log("Hello Js User");
// };
// userName.greetingTwo = function () {
//   console.log(`Hello Js User ${this["full name"]}`);
// };
// console.log(userName.greeting());
// console.log(userName.greetingTwo());

// const tinderUser = new Object();//singleton
const tinderUser = {}; // non singleton
tinderUser.id = "123abc";
tinderUser.name = "Sarita Maurya";
tinderUser.isLoggedIn = false;
tinderUser.name = "sarita@gmail.com";
tinderUser.rollNumber = 2203600109024;
// console.log(tinderUser);
// console.log();

// destructurig
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "Hitesh",
};
// course.courseInstructor

const { courseInstructor: Instructor } = course;
console.log(Instructor);

// JSON
