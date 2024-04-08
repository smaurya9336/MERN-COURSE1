class User {
  constructor(username) {
    this.username = username;
    // console.log("called");
  }
  logMe() {
    console.log(`Username is ${this.username}`);
  }
}
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const demo = new Teacher("Sarita Maurya", "sm@teacher.com", "123");
demo.addCourse();

const masalChai = new User("masalaChai");

masalChai.logMe();

console.log(demo instanceof User);
