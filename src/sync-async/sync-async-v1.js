const https = require("https");
const fs = require("fs");

console.log("Hello World!");

let x = 7349;
let y = 4503;

https.get("https://jsonplaceholder.typicode.com/users/1", () =>
  console.log("Fetched data from API successfully"),
);

setTimeout(() => console.log("setTimeout called after 5 seconds"), 5000);

fs.readFile("./file.txt", "utf8", (err, data) => console.log(data));

function multiply(a, b) {
  return a * b;
}

let result = multiply(x, y);
console.log("Multiplication of two numbers - ", result);
