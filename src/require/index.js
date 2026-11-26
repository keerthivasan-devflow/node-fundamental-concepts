// const calculate = require("./math"); // Example 1: To import a single object or function
const { calculate, rollno } = require("./math"); // Example 2: To import exported objects and destructure it for clean code
const data = require("./data.json");

let person = {
  firstname: "bolmeyer",
  lastname: "lauren",
};

console.log(`Hello ${person.firstname} ${person.lastname}`);
console.log(calculate(100, 200));
console.log(rollno);
console.log(data)