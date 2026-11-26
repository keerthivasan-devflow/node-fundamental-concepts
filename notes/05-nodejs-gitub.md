## require()

when you use require() in Node.js, the module’s code is not executed directly in the global scope. Instead, Node.js wraps every module file inside a function (IIFE) before running it.

```js
(function (exports, require, module, __filename, __dirname) {
  // your module code here
});
```

1. Resolving the module → Node figures out what file you’re asking for. If you wrote require('./math'), it resolves to math.js in the same folder. It also checks for .json or .node extensions if .js isn’t found.

2. Check the cache Node → looks in its module cache to see if this file was already loaded. If yes, it immediately returns the cached module.exports object — no re-execution. This ensures modules run only once per process.

3. Load the file → If not cached, Node reads the file from disk depending on the extension.
4. Wrap and Execute → For .js files, Node wraps the code inside the function (IIFE).
5. Return exports → Whatever you assigned to module.exports becomes the result of require(). That value is cached for future calls.

## Node.js does not wrap the JSON file in a function. Instead, it does the following

1. Resolves the path → Finds `config.json`.
2. Checks the cache → If already loaded, returns cached object.
3. Reads the file → Reads the raw JSON text from disk.
4. Parses JSON → Uses JSON.parse() internally to convert the text into a JavaScript object.
5. Exports the object → Assigns the parsed object directly to module.exports.

## Supported File Extension In Node.js

In Node.js, the require() function only supports a limited set of file types by default: .js, .json, and .node. Other extensions like images or text files are not natively supported unless you use bundlers or custom loaders
