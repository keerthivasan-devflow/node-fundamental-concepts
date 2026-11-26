const https = require("https");

let x = 7349;
let y = 4503;

console.log("Hello World!");

https.get("https://jsonplaceholder.typicode.com/users/1", () =>
  console.log("Fetched data from API successfully"),
);

setTimeout(() => console.log("setTimeout called after 5 seconds"), 5000);

setTimeout(() => console.log("setTimeout called in ZERO (0) seconds"));

function multiply(a, b) {
  return a * b;
}

let result = multiply(x, y);
console.log("Multiplication of two numbers - ", result);
