const fs = require("fs");
const a = 100;

setImmediate(() => console.log("Immediate (Check Phase)"));

Promise.resolve().then(() => console.log("Promise Queue (Microtask)"));

fs.readFile(".../../file.txt", "utf8", (err, data) =>
  console.log("File Read Operation (Poll Phase)", data),
);

setTimeout(() => console.log("Timeout (Timer Phase) - [0] second"));

process.nextTick(() => console.log("Process Next Tick (Microtask)"));

function print() {
  console.log(`a = ${a}`);
}

print();

console.log("Last line of the file!");
