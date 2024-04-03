// function hello() {
//   console.log("inside the hello function");
// }

// function demo() {
//   hello();
//   console.log("demo function");
// }
// demo();

function one() {
  return 1;
}
function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}

three();
