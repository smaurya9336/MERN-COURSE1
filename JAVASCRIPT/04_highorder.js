let greet = function () {
  console.log("hello");
};
greet();

function multipleGreet(func, count) {
  // high order function
  for (let i = 1; i <= count; i++) {
    func();
  }
}
multipleGreet(greet, 2);
