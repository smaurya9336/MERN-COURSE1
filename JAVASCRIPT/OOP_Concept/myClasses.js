// ES6
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPaasword() {
    return `${this.password}abc`;
  }
  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const demo = new User("sarita", "sarita@gmail.com", "123");

console.log(demo.encryptPaasword());
console.log(demo.changeUsername());
