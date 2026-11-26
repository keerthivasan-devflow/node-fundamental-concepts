## V8 Engine

- Server → Generally, it is a computer that operates remotely and is located in a specific place.
- Blocking Server → Apache HTTP Server
- Non-Blocking Server → Node.js HTTP Server

Javascript V8 Engine written in C++ and open-source, high performance javascript and web assembly engine [incredibly fast/powerful engine in nature]. It compiles JavaScript code directly into machine code instead of interpreting it, which speeds up execution. V8 also uses advanced techniques like Just-In-Time (JIT) compilation, where it optimizes code as it runs, making performance even better over time. Its efficient memory management and optimization for both server-side (Node.js) and client-side (in Chrome) applications contribute to its effectiveness. All these factors together make V8 one of the most high-performance JavaScript engines available. Eventually v8 can be embedded into any C++ application.

- `Example → Node.js is a C++ application that embeds the V8 JavaScript engine within it.`

## Javascript vs ECMAScript

- JavaScript is an implementation of ECMAScript.
- Syntax is the surface-level grammar you write.
- ECMAScript is the underlying specification that ensures all JavaScript engines behave consistently.
- Browsers and runtimes (like Node.js) implement ECMAScript, but also add extra APIs (DOM, BOM, Node.js modules) that are not part of ECMAScript.

## Questions

1. What is a JavaScript V8 Engine, and why is it necessary?
   - To execute JS code on a web browser with the help of Javascript V8 Engine(C++ code) - Machine understandable code.
2. Since Node.js and Javascript V8 Engine are written in C++, why are both required to run JavaScript code?
3. What is ECMAScript? Are there any differences between Javascript and ECMAScript?
4. Do all browsers have different JavaScript engines?
   - Yes, but all the JS Engines must follow ECMAScript standards but their implementation may vary.
5. What makes V8 so powerful?
