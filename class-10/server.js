// Middlewares :

// Middlewares are functions that have access to the `request(req)` and `response(res)` and the `next` function in express.js.

//1. Execute any code
//2. Modify the `req` and `res` objects.
//3. Call `next()` to pass control to the next middleware function in the stack.
//4. End the req-res cycle.

const express = require("express");
const app = express();
const router = express.Router();
const logRequestDetails = require("./customMiddleware.js");

// Types :
// Application-level middleware (app.use())
// Application-level middleware
// app.use((req, res, next) => {
//   console.log("Hello from application-level middleware");
//   next();
// });
// Route-level middleware
// router.use((req, res, next) => {
//   console.log("Hello from route-level middleware");
// });
// Error-handling middlewares
// app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).send("Error happens");
// });
// Built-In middlewares
// express.json() : parses the request body as JSON
// express.urlencoded() : parses the request body as URL encoded data
// express.static() : serves static files from the root of the application

// Third-party middlewares
// Morgan
// CORS

// Custom Middlewares

app.use(express.json());
app.use(logRequestDetails);

app.get("/", (req, res) => {
  //   res.send(JSON.stringify({ message: "Hello, World!" }));
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.json("Hello from root");
  res.send("Hello from root");
});

app.get("/about", (req, res) => {
  res.send("Hello from about");
});

app.get("/service", (req, res) => {
  res.send("Hello from service");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
