function SetUsername(username) {
  // Complex DB calls
  this.username = username;
  console.log("called");
}
function createUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}
const demo = new createUser("Sarita", "sarita@google.com", "1234");
console.log(demo);
