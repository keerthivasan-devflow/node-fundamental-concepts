## Trust issues with setTimeout()

In Node.js, the “trust issue” with setTimeout() means you cannot rely on it to execute exactly at the specified delay — it only guarantees a minimum delay. The actual callback execution depends on the event loop’s availability, so heavy synchronous tasks or blocking operations can make timers fire much later than expected.

1. Minimum delay, not exact timing → setTimeout(fn, 1000) ensures the callback won’t run before 1000 ms, but it may run much later if the event loop is busy. This is the core “trust issue.”

2. Event loop dependency → Node.js is single-threaded. If the call stack is blocked by synchronous code (e.g., a long loop or CPU-heavy task), the timer callback waits until the stack clears.

3. Timer handle objects → Unlike browsers, Node.js returns a Timeout object instead of a numeric ID. This object participates in lifecycle management and can be controlled with .ref() and .unref().
   - ref() → keeps the process alive until the timer fires.
   - unref() → allows Node.js to exit even if the timer hasn’t fired.

## Why Developers Call It a “Trust Issue”

- Expectation vs Reality → Developers often expect setTimeout(fn, 2000) to run exactly after 2 seconds. In reality, it runs after at least 2 seconds, plus any extra delay caused by event loop congestion.

## What "Process Lifecycle" Means in Node.js

- Process lifecycle → The lifespan of the Node.js program (from start until exit).
- Node.js will normally exit when:
  - The event loop is empty (no pending tasks, timers, or callbacks).
  - Nothing is keeping the process alive.

## How Timers Affect Lifecycle

1. Browser timers → (`setTimeout`) don’t affect lifecycle because the browser itself is always running. The page may unload, but the browser process continues.

2. Node.js timers → return a `Timeout` object that can influence lifecycle.
   - `.ref()` → Marks the timer as “important.” Node.js will not exit until this timer fires.
   - `.unref()` → Marks the timer as “non-essential.” Node.js may exit early even if the timer hasn’t fired.
