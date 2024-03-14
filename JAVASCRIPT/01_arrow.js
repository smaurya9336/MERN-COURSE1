const user = {
  username: "Sarita",
  price: 999,

  welcomeMessage: function () {
    // console.log(`${this.username} , welcome to Website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function Username() {
//   let userName = "Sarita";
//   console.log(this.UserName);
// }
// Username();

// const chai = function () {
//   let username = "hitesh";
//   console.log(this.username);
// };

const chai = () => {
  let username = "hitesh";
  //   console.log(this.username);
  console.log(this);
};

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;

// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({ user: "sarita" });

// console.log(addTwo(7, 9));

//IIFE
(function chai() {
  // named IIFE
  console.log(`DB connected`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("SARITA");
