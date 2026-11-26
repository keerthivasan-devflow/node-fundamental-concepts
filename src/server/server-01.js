const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("Hello World!");
});

server.listen(8080, "localhost", () =>
  console.log("server is listening for an incoming request"),
);
