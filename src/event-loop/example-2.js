const https = require("https");
const fs = require("fs");

var employeeNo = 174640;
let employeeName = "Rick Stalker";

console.log("Hello World");

https.get("https://jsonplaceholder.typicode.com/users/1", (data) =>
  console.log("HTTP Request (Poll Phase)"),
);

fs.readFile("./file.txt", "utf8", (err, data) => console.log(data));

new Promise(() => {
  console.log("This is a simple promise console.log()");
});

setTimeout(() => console.log("Timeout (Timer Phase) - [5] seconds"), 5000);

setTimeout(() => console.log("Timeout (Timer Phase) - [0] second"));

console.log(`Employee Information: ${employeeNo} - ${employeeName}`);
