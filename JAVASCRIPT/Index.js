let isLoggedIn = "Sarita";

let booleanIsLoogedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoogedIn);
// 1= true; 0=false
//""=false ; "sarita"=true;

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// *********************** Operations ************************

let value = 3;
let negValue = -value;
//console.log(negValue);

let str1 = "hello";
let str2 = " Sarita";
let str3 = str1 + str2;
//console.log(str3);

// console.log(+true); //1

// let num1 = 4;
// console.log(num1);

//****************Comparison of data type **************** */
// console.log(2>1)//true
// console.log(2>=1)//false

// console.log(null=0);//false
// console.log(null==0);//false
// console.log(null>=0);//true

// console.log(undefined==0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// console.log("2"===2);

// let userOne = {
//   email: "sarita@gmail.com",
//   upi: "user@ybl",
// };
// let userTwo = userOne;
// userTwo.email = "sm7767119@gmail.com";

// console.log(userOne.email);
// console.log(userTwo.email);

let name = "Sarita Maurya";
let repoCount = 70;

// console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String("sarita-Maurya");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());
console.log(gameName.indexOf("t"));
let newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-12, 7);
// console.log(anotherString);

const newStr1 = "    sarita   ";
// console.log(newStr1);
// console.log(newStr1.trim()); //remove space

const url = "https://sarita.com/sarita%20maurya";
console.log(url.replace("%20", "-"));

console.log(gameName.split("-"));
console.log(gameName.bold());
