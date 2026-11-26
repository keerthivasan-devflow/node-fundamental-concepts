const fs = require("fs");
const a = 100;

setImmediate(() => console.log("Immediate (Check Phase)"));

// Assume this operation takes some time to complete so it will be handled in a later event-loop cycle.
// JavaScript doesn't wait for it to finish, so it continues to the next phase. i.e., the CHECK phase.
// Therefore, setImmediate() gets executed before the file operation completes.

fs.readFile(".../../file.txt", "utf8", (err, data) =>
  console.log("File Read Operation (Poll Phase)", data),
);

setTimeout(() => console.log("Timeout (Timer Phase) - [0] second"));

function print() {
  console.log(`a = ${a}`);
}

print();

console.log("Last line of the file!");
