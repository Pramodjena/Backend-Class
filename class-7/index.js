const fs = require("fs");
const path = require("path");
const http = require("http");
require("dotenv").config();
const { readFile } = require("./customFunction.js");
// const env = require("dotenv");
// console.log(env.config().parsed.PORT);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("API working fine");
  } else if (req.url === "/read") {
    const data = JSON.stringify(readFile());
    console.log(data);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  }
});

const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
