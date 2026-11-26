## PART - 1 | Refer hand-written notes

Event Loop is the core mechanism that allows Node.js to perform non-blocking, asynchronous I/O operations despite JavaScript running on a single thread. It achieves this by offloading heavy, time-consuming tasks (like file system operations, network requests, or cryptography) to the underlying system kernel or a thread pool managed by the C++ library libuv. When those background tasks finish, libuv passes their callback functions back to the event loop to be executed on the main thread.

- LIBUV is a multi-platform C library that provides support for asynchronous I/O based on event loops.

- It act as a middle-layer between javascript V8 Engine and Operating System (OS).

- The following are the parts of LIBUV: **Callback Queue, Event Loop and Thread Pool, Cross-Platform Abstraction**

- When a task is offloaded to libuv , libuv internally performs several operations. For instance, if you initiate
  a file read operation, once the data is received back from the operating system, it is libuv 's responsibility
  to handle the callback function and eventually send it to the call stack for execution.

- Now, imagine there are millions of lines of JavaScript code running within the JavaScript engine. If an asynchronous task like an API call returns data very quickly from the OS to libuv , that API call must wait in the callback queue within libuv until the V8 engine is free to process it **The callback queue is where callbacks are stored after an asynchronous operation is completed. The event loop processes this queue to execute the callbacks when the call stack is empty**. This ensures that the non-blocking nature of Node.js is maintained, as the V8 engine can continue executing other code without being blocked by these asynchronous operations.

- So, let's say multiple asynchronous tasks, like an API call returning results, a setTimeout , and a file read operation, are completed simultaneously. To manage this, libuv maintains separate callback queues for different types of tasks, such
  as timers, API calls, and file reads. **This is where the **event loop** comes into play. It continuously monitors both the **callback queue** and the **call stack**. When there are tasks waiting in the callback queue and the call stack is empty, the event loop takes those tasks from the queue and pushes them onto the call stack for execution.**

- The event loop's main responsibility is to ensure that all pending tasks in the callback queues are executed at the appropriate time and in the correct order of priority.

## FAQs

1. What are difference betweeb microtask and macrotask queue? Follow-up questions could be like when these two queues will be executed on high priority?
2. If timer phase is the very first phase will be executed in the event loop, then how setImmediate() executed before timers?
3. why trust issues with setTimeout()?
   Eventhough there is no specified delay, this is an async so it will be called only when the callstack is empty because the above function will be offloaded to LIBUV - This's why trust issues with setTimeout()

4. File Operations vs. HTTP Requests
   When both a file operation and an HTTP request are involved, the file operation may complete earlier because the data is available locally and can generally be accessed faster. In contrast, an HTTP request involves several additional steps, such as establishing the request, performing a DNS lookup, resolving the domain name to an IP address, connecting to the remote server, and fetching the data. These network-related steps can take more time That's why the file operation may complete before the HTTP request.

5. Where the event loop actually waits and listening for any callbacks?
   This is at poll phase if there are no loner callbacks in all the phases thatswhy it can be called as semi-inifinte loop.
