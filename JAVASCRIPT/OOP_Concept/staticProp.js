class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username :${this.username}`);
  }
  static createId() {
    return `123`;
  }
}
const sarita = new User("sarita");
console.log(sarita.createId());
