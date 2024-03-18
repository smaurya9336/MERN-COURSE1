function hello() {
  console.log("Hello! world");
}
// hello();

// function printName() {
//   console.log("apna college");
// }
// printName();

function printPoem() {
  console.log("Twinkle Twinkle, little star");
  console.log("how I wonder what you are");
}
// printPoem();

// dice

function diceGame() {
  let random = Math.floor(Math.random() * 6) + 1;
  console.log(random);
}

// diceGame();

function printName(name, age) {
  console.log(`${name}'s age is ${age}.`);
}
printName("sarita", 23);
printName("mamta", 24);
printName("Harsh", 23);

function calcAvg(a, b, c) {
  let avg = (a + b + c) / 3;
  console.log(avg);
}
calcAvg(2, 2, 4);

function printTable(n) {
  for (i = n; i <= n * 10; i += n) {
    console.log(i);
  }
}
printTable(6);
