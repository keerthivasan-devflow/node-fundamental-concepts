const fs = require("fs");

setImmediate(() => console.log("Immediate (Check Phase)"));

setTimeout(() => console.log("Timeout (Timer Phase) - [0] second"));

Promise.resolve().then(() => console.log("Promise Queue (Microtask)"));

fs.readFile("file.txt", "utf8", () => {
  console.log("File Reading...");
});

process.nextTick(() => {
  // nextTick() will be executed all of its body, then only it will go to next phase i.e. Promise
  process.nextTick(() => console.log("Outer - Process Next Tick (Microtask)"));
  console.log("Inner - Process Next Tick (Microtask)");
});

console.log("Last line of the file");
