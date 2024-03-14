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

function Username() {
  console.log(this);
}
username();
