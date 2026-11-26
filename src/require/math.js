console.log("Math module will be executed!");

function calculate(a, b) {
  return a + b;
}

let rollno = 174640;

// Example 1: To export a single object or function directly
// module.exports = calculate;

// Example 2: For multiple exports (Recommended Approach)
module.exports = {
  calculate,
  rollno,
};

// Example: This is exactly same like Example 2
// module.exports.calculate
// module.exports.rollno

// Example 4: For multiple exports using "exports"
// exports.add = (a, b) => {
//   return a + b;
// };
// exports.x = 100;
// exports.subjects = ["tamil", "english", "maths", "science", "social"];

// console.log(module.exports);
