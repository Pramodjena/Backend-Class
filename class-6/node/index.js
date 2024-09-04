//  Create your own http server
const http = require("http");

// console.log(http);

// The `request` object can be used to get informationabout the HTTP request...
// Eg: url, headers and data
// The `response` object can be used to send response for http request
// Eg: status code, headers and data

// Create a server
const server = http.createServer((req, res) => {
  // When a request is made to the server, this function is called
  // The request object contains information about the request
  // The response object is used to send a response back to the client
  // The status code is used to indicate the status of the request
  // Eg: 200 for OK, 404 for Not Found, 500 for Internal Server

  console.log(`You have visited : ${req.url}`);
  res.end(`You have visited : ${req.url}`);
});
// console.log(server);

// Run the server
server.listen(1234, "127.0.0.1", () => {
  console.log("Server is running on port 1234");
});
