let x = 7349;
let y = 4503;

console.log("Hello World!");

for (let i = 0; i < 99999; i++) {
  console.log("Iteration - ", i);
}

setTimeout(() => console.log("setTimeout called in ZERO (0) seconds"));

function multiply(a, b) {
  return a * b;
}

let result = multiply(x, y);
console.log("Multiplication of two numbers - ", result);
