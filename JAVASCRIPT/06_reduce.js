//reduce

const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function (acc, currentVal) {
//   console.log(`acc:${acc} and current Value ${currentVal}`);
//   return acc + currentVal;
// }, 0);

const myTotal = myNums.reduce((acc, currval) => acc, +currval, 0);
console.log(myTotal);

const shoppingCart = [
  {
    itenName: "js course",
    price: 2999,
  },
  {
    itenName: "python course",
    price: 999,
  },
  {
    itenName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay);
