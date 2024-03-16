let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for (i = 0; i < arr.length; i++) {
  if (arr[i] == num) {
    arr.splice(i, 1);
  }
}
// console.log(arr);

//Write a js program to find the number of digits in a number

// let number = 2783883;
// let count = 0;
// let copy = number;
// while (copy > 0) {
//   count++;
//   copy = Math.floor(copy / 10);
// }
// console.log(count);

let number = 287152;
let sum = 0;

let copy1 = number;

while (copy1 > 0) {
  let digit = copy1 % 10;
  sum += digit;
  copy1 = Math.floor(copy1 / 10);
}
// console.log(sum);

let n = 5;
let fact = 1;
for (let i = 1; i <= n; i++) {
  fact *= i;
}

// console.log(`factorial of ${n} is ${fact}`);

let arr1 = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;
for (let i = 0; i <= arr1.length; i++) {
  if (largest < arr1[i]) {
    largest = arr1[i];
  }
}

console.log(largest);
