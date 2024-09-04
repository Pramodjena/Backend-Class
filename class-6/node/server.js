// Import modules

const http = require("http");

// Create server

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`This is home page`);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>This is about page</h1>`);
  } else if (req.url === "/service") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`This is service page `);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end(`Page not found`);
  }
});

// Run server
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// Task-1:
// Create a server that listens on port 4000 and responds with "Hello, World!" in home page
// and "This is about page" in about page. If any other page is requested, "page not found"
// switch statement
