## Questions

1. require("https") / require("node: https") - Are they similar or different? If you add "node" which means core module
2. What is crypto module?
3. What is Zlib module? - To compress files/folders

## Topics

- Node.js Introduction
- Node.js Features
- REPL
- Module Exports / Imports using Common JS vs ES6
- Synchronous vs Asynchronous Code Execution
  - How synchronous vs asynchronous code could be executed?
  - What happens if readFileSync() function exist in your module? Does V8 execute the file operation? Does V8 offloads this code to LIBUV? Does it block main-thread since it is a synchronous function that needs to be read by OS and get the data back to us.
  - Best example to show case the blocking main thread is - crypto module with sync function
  - What happens if setTimeout() has delay as ZERO? Trust Issue W/ setTimeout()
  - crypto function gives their output at the same time if there are many functions exists?
  - What happens if there are more than 4 asynchronous crypto function?
- Why file read operation done before fetch() call?
- LIBUV
- Parts (or) Features of LIBUV
- Event Loop
- Event Loop Phases
- Thread Pool
- what is the meaning of "require(node:crypto)"?
- what pbkdf? - Password base key derivative Function

## Read about

- Event Emitters
- Streams vs Buffers
- Pipes
