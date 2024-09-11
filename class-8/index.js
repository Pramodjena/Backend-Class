// Events Module :
// Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
// To include the built-in Events module use the require() method. In addition, all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:

// Example-1 :
// Create an EventEmitter object and listen for the "myEvent" event.
// Import modules
const EventEmitter = require("events");

const event = new EventEmitter();
// console.log(typeof event); // object

// Listen for the "myEvent" event
event.on("myEvent", () => {
  console.log("myEvent started");
});

// Fire the "myEvent" event
event.emit("myEvent"); // call

// Example-2 :

event.on("checkStatus", () => {
  console.log("checkStatus started");
});

event.on("checkStatus", (sc) => {
  console.log(`Status code is ${sc} ok.`);
});

event.emit("checkStatus", 200); // fire

// Stream :

// Node.js has a built-in module, called "Stream", where you can create-, fire-,
// and listen for- your own events.
// To include the built-in Stream module use the require() method.
// In addition, all event properties and methods are an instance of an EventEmitter object.
// To be able to access these properties and methods, create an EventEmitter object:

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  // 1st process to read:
  //   fs.readFile("text.txt", (err, data) => {
  //     if (err) return console.log(err);
  //     res.end(data.toString());
  //   });

  //2nd process:
  //   const stream = fs.createReadStream("text.txt");
  //   stream.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   stream.on("end", () => {
  //     res.end();
  //   });
  //   stream.on("error", (err) => {
  //     console.log(err);
  //     res.end(err);
  //   });

  //3rd process:
  const stream = fs.createReadStream("text.txt");
  stream.pipe(res);
});

server.listen(4000, "127.0.0.1");

// Chunk :
// Chunked data refers to the way data sent to the server in pieces or "chunk" rather than all at once.
// This is useful for large files or data streams where sending the entire file at once would be inefficient
// or even impossible.
// e:g large videos ..

// How chunk works :
// Response start : It sends data to the server without knowing the actual size.
// Chunks: Chunk is sent with its own size header, including how much data is in the current chunk.
// Last chunk: The last chunk is sent with a size of 0, indicating that it is
// the last chunk of data.
// End of response: The server receives the last chunk and sends a response back to the client.
// Chunked encoding is a way to send data in a stream of chunks, each with its own
// size header, rather than sending the entire data at once.
// Chunked encoding is useful for large files or data streams where sending the entire file at once would
// be inefficient or even impossible.
