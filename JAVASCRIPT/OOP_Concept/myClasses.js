// ES6
// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPaasword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }
// const demo = new User("sarita", "sarita@gmail.com", "123");

// console.log(demo.encryptPaasword());
// console.log(demo.changeUsername());

// behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User.prototype.encryptPaasword = function () {
  return `${this.password}abc`;
};
User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const demo2 = new User("harsh", "harsh@lnt.com", "1234");
console.log(demo2.encryptPaasword());
console.log(demo2.changeUsername());
