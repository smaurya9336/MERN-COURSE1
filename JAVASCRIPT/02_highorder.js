const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}

//array

const programming = ["js", "rb", "java", "py", "cpp"];

for (const key in programming) {
  console.log(`${key} is ${programming[key]}`);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("Fr", "France");

for (const key in map) {
  console.log(key);
}
