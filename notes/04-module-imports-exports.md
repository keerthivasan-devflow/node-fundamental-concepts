## How do you make multiple modules to work together?

When you use the `require()` function alone, you cannot access variables, functions, or classes directly because modules will protect their variables(it becomes private variables or functions), functions etc from leaking. However, if there are any `console.log()` statements in the file, they will still be executed.

## module.exports = {} vs exports shortand notation

1. exports is just a shortcut to module.exports.
2. If you do exports.add = ..., you’re adding properties to the existing module.exports object.
3. If you do module.exports = {...}, you’re replacing the whole object.

- Adding properties → You’re filling the default empty object with keys.
- Replacing the object → You’re discarding the default empty object and giving module.exports a new one.
- The only “gotcha” is if you accidentally write exports = {...}, you break the link to module.exports.

## Common JS Module

- By default, common JS module will be enabled in Node.js. In Node.js, CJS is the prefered way to import (or) export the modules.
- Add the following in the package.json file: `{"type" : "commonjs" }`
- Oldest way of import (or) export modules.
- Synchronous
- Runs on non-strict mode → undeclared variables like "x = 10" will be executed successfully.
- Modules are exported using module.exports whereas imported using require() function.
- .js | .cjs | .cjsx | .ts | .cts | .ctsx

  While CommonJS is synchronous and works well for server-side code, it is not as ideal for client-side (browser) code where asynchronous loading and tree-shaking (removal of unused code) are important features, which is why ES Modules are preferred for modern web development.

## ES6 Module

- By default, ES6 module will be enabled in React (or) Angular (or) Vue.
- Add the following in the package.json file: `{"type" : "module" }` or `type="module"` in the script tag to enable ES6 Module.
- Newest way of import (or) export modules.
- Asynchronous
- Runs on strict mode
- Modules are exported and imported using keywords like import (or) export itself.
- .js | .mjs | .mts | .mjsx | .mtsx

Important Note: If you try to `console.log(module.exports)` will return an empty object and also better way to always export and import module is using `module.exports = {}`.

## Can I use require() function in browser?

No, `.cjs` files (CommonJS modules) are not directly supported by browsers. Browsers typically use ES Modules (with `.mjs` extensions or `type="module"` in HTML) However, you can use tools like **Webpack**, **Parcel**, or **Babel** to bundle your `.cjs` files into a format that browsers can understand (usually ES Modules or other browser-compatible formats).

In a Node.js application, there is typically a single entry point, which is specified like this:
`node app.js` where `app.js` is an entry point file.
