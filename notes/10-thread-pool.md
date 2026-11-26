## What is thread pool?

In Node.js, the thread pool is part of the libuv library, which is responsible for handling asynchronous I/O operations, such as file system operations, DNS lookups, and high CPU intensive tasks. Since Node.js is single-threaded for JavaScript execution (meaning it runs on a single main event loop thread), it relies on libuv's thread pool to offload certain blocking or time-consuming operations to a pool of background threads. This helps prevent the main event loop from being blocked, ensuring that the application can remain responsive.

## How thread pool works?

In Node.js, when asynchronous code enters the call stack, it offloads those tasks to a thread in the thread pool. For example, when a file read/write operation is encountered, it is assigned to a thread(worker) in the thread pool. This thread will remain occupied with the file operation completely (literally, which means it cannot execute any other tasks) and blocked until the operation is complete. Once finished, the thread becomes available to handle other asynchronous tasks.

## How to change the default size of the thread pool?

- The default size of the thread pool is 4, but it can be modified using the UV_THREADPOOL_SIZE environment variable and also this variable must be set before running the Node application. You can increase the size if you have many blocking operations, or decrease it if you're concerned about resource usage.
- This libuv package allows us to raise the number of threads from 4 to 1024.

  export process.env.UV_THREADPOOL_SIZE = 6

## Limitations of thread pool

The thread pool size is limited, so if too many blocking tasks are sent to the pool and all threads are busy, other tasks have to wait [Event Queue] for a thread to become available. This can lead to delays in processing tasks that rely on the thread pool. Node.js prioritizes non-blocking operations on the event loop. As such, while the thread pool helps with blocking tasks, Node.js is still highly optimized for handling a large number of non-blocking I/O tasks efficiently.

## Don't block the Main Thread

- Sync Methods
- Regular Expression
- Heavy / Complex calculation using control loop statements
- Heavy JSON objects

## Expected Interview Questions

1. What is thread pool? Why do we need it?
2. What is the default size of thread pool? Is this customizable?
3. Is node a single thread / multi-thread? It depends on synchronous / asynchronous code

## How does LIBUV communicate with the OS

1. Networking via sockets — Most communication between LIBUV and the operating system happens through sockets.
2. HTTP request example — When a user makes an HTTP request, a TCP connection is established using sockets.
3. Socket descriptors — Different types of sockets exist, and each socket is represented by a socket or file descriptor provided by the OS.

## Scenario Based Questions

If 1000 incoming requests are coming concurrently towards to your webserver, Instead of creating thousands of threads to handle as many incoming requests on your webserver, which is not highly recommended, the operating system can efficiently manage this scenario using mechanisms like epoll (epoll used Red-Black Tree) (on Linux) or kqueue (on macOS) - [These mechanism available inside OS].

Note: epoll - Scalable I/O Event Notification Mechanism

## Thread Per Connection (epoll uses this mechanism)

In Node.js, the "thread per connection" model refers to the idea of creating a new thread for each incoming client connection or request. However, this model is not typically how node.js operates. [not a good approach]

Node.js uses a single-threaded event loop to handle multiple concurrent connections. This means that, rather than creating a new thread for each connection (as you might see in traditional multithreaded server models), Node.js handles many requests asynchronously in a non-blocking manner using event-driven architecture.

- You can create a epoll descriptor which will have collections of your socket descriptors. Therefore a single epoll descriptor can handle multiple socket descriptors.

Operating System — Hardware — Kernel — Process

Now processes need to interact with kernal where the actual epoll mechanism exist.
