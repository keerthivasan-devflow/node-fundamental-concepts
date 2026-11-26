const fs = require("fs");

setImmediate(() => console.log("Immediate (Check Phase) - 1"));

setTimeout(() => console.log("Timeout (Timer Phase) - [0] second - 1"));

Promise.resolve().then(() => console.log("Promise Queue (Microtask)"));

// Actually File Operation will be done on Phase 2.
// So, to execute the available call back from fs, event loop starts execution from POLL PHASE instead of timer phase.
// Therefore setImmediate() invoked before setTimeout().

fs.readFile("file.txt", "utf8", () => {
  setTimeout(() => console.log("Timeout (Timer Phase) - [5] seconds - 2"));

  setImmediate(() => console.log("Immediate (Check Phase) - 2"));

  process.nextTick(() => console.log("Process Next Tick (Microtask) - 2"));

  console.log("File Reading...");
});

process.nextTick(() => console.log("Process Next Tick (Microtask)- 1"));

console.log("Last line of the file");
