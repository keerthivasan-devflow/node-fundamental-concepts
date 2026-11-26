## Synchronous Code Execution vs Asyncrhronous Code Execution - (Theory)

- https://codedamn.com/news/nodejs/libuv-architecture
- https://github.com/libuv/libuv

## How synchronous code gets executed?

- Javascript itself is a synchronous, single-threaded and blocking I/O
- will be executed as fast as possible (typically in ms)
- will block the main thread - (This is the actual drawback of javascript code or synchronous code execution).
- The main event loop runs on a single-thread, executing JavaScript code sequentially.
- Garbage Collector - which is available in V8 Engine therefore no need to take care of cleaning up memory
- Realtime usecases
  - Ecommerce Application - `Adding an item to the cart -> Payment process -> Showing order summary`
  - User Login and Authentication - This means the user will enter their credentials, and only after validation will they be redirected to another page
- Note: An example of synchronous code execution is provided in the `sync.js` file in the code repo.

## How asynchronous code gets executed?

- Node.js is asynchronous primarily and fast execution due to libuv, which is a core library provided by Node.js.
- Libuv is a built-in feature of Node.js.
- Cross platform library, typically written in C
- Middlelayer exist between V8 Engine and Operating System
- Refer `7-Sync-Async-Timer.md`
- Note: An example of synchronous code execution is provided in the `async.js` file in the code repo.

## Code Explanation of async.js

- The given code snippet includes three asynchronous operations: File Operation, Fetching data from an API, and Timer Function.
- These operations can be executed in a certain order, but it may vary depending on the file data. If the file data is too large, the order may change.
- File Operation is usually completed quickly compared to Fetching data from external resources and Timer Functions.
- Timer values are specified in seconds, whereas JavaScript executes code in milliseconds. As a result, the Timer Function will always execute last.

## Important Note

- Since readFileSync() is a synchronous function. Although synchronous code is typically executed by the V8 engine, file operations like readFileSync() cannot be executed by V8 itself because the engine does not have access to the File System (or) Operating System. Therefore, this file operation would be offloaded to LIBUV. During this time, the V8 engine will block the main thread. Once the file operation is completed successfully, the next line of code will be executed.

- Although synchronous functions are available in Node.js, it’s important to avoid using them as much as possible for better developer practices.
