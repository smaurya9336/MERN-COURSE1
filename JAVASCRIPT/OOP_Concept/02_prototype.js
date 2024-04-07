// let myName = "Sarita   ";
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`spidy power is ${this.spiderman}`);
  },
};

Object.prototype.sarita = function () {
  console.log(`Sarita is present in all objects`);
};
Array.prototype.heySarita = function () {
  console.log(`Sarita says hello`);
};

// heroPower.sarita();

myHeros.sarita();
myHeros.heySarita();
// heroPower.heySarita();

// inheritance

const User = {
  name: "sarita",
  email: "sm3244@gmail.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

// Teacher.__proto__ = User;   //old

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiaurCode   ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
};
anotherUsername.trueLength();
"Sarita".trueLength();
"iceTea".trueLength();
