console.log("1. Synchronous");

setTimeout(() => console.log("5. Timeout (Timer Phase)"), 0);
setImmediate(() => console.log("6. Immediate (Check Phase)"));

process.nextTick(() => console.log("3. Process Next Tick (Microtask)"));
Promise.resolve().then(() => console.log("4. Promise Queue (Microtask)"));

console.log("2. Synchronous End");
