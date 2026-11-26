// Example: Everything runs in sequence, no skipping, no delay. That’s the essence of synchronous execution.

console.log("Start");

function greet() {
  console.log("Inside function");
}

for (let i = 0; i < 3; i++) {
  console.log("Loop iteration:", i);
}

greet();

console.log("End");
