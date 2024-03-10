const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNum = 123.8966;

console.log(otherNum.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

//**************** Maths*************** */

// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(5.7));
// console.log(Math.ceil(4.5));
// console.log(Math.floor(5.4));
// console.log(Math.min(4, 5, 6, 2, 9));
// console.log(Math.max(80, 36, 89, 70));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
