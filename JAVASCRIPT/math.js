let num = 27374.845;
console.log(Math.random());
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.PI);

console.log(Math.floor(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 100) + 1);

// console.log(Math.floor(Math.random() * 5) + 10);

// Guessing Game

const max = prompt("enter the maximum number");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");
while (true) {
  if (guess == "quit") {
    console.log("user quit");
    break;
  }
  if (guess == random) {
    console.log("you are right ! congrats!!");
    break;
  } else if (guess < random) {
    guess = prompt("your guess was too small.please try again");
  } else {
    guess = prompt("your guess is too large.please try again");
  }
  //    else {
  // guess = prompt("your guess was wrong.please try again");
  //   }
}
// console.log(random);
