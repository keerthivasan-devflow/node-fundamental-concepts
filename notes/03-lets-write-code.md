## Window Object vs Global Object

1. `window, this, self, frames` → returns the window object in browsers but `global` returns Reference Error.
2. `global` → returns global object and `this` returns `{}` in node.js environment but `window` returns Reference Error.
3. `globalThis` → returns window object everywhere.
