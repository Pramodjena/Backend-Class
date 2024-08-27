// Modules :
// Import module
const fs = require("fs"); // CommonJS(Recommended)

// import fs from 'fs'; // ECMAScript

// console.log(fs);
// Fs (File System) module is used to interact with the file system.
// Sync :

// Calling `require()` always use the CommonJS module loader. Calling `import()` always use the ECMAScript module loader.

// Create file:
// fs.writeFileSync()

// fs.writeFileSync("notes.txt", "I am learning Node.js");
// fs.writeFileSync(
//   "notes.txt",
//   "I am learning Node.js and this is file system.\n"
// );
// It will over-write

// append file:
// It will append the string to the end of the file.
// fs.appendFileSync("notes.txt", " I am learning backend.");
// fs.appendFileSync("notes.txt", "I am learning backend.\n");
// fs.appendFileSync("notes.txt", "It is a part of mern series.\n");

// Read file:
// const readeData = fs.readFileSync("./notes.txt"); //returns a Buffer object.
// console.log(readeData);
{
  /* <Buffer 49 20 61 6d 20 6c 65 61 72 6e 69 6e 67 20 4e 6f 64 65 2e 6a 73 20 61 6e 64 20 74 68 69 73 20 69 73 20 66 69 6c 65 20 73 79 73 74 65 6d 2e 0a 49 20 61 ... 49 more bytes> */
}

// Node.js include an additional data type - buffer(not available in javascript browser)
// Buffer is a class in Node.js that is used to handle binary data.
// console.log(readeData.toString());

// Rename file:
// fs.renameSync("notes.txt", "files.txt");

// Create folder:
// fs.mkdirSync("nodeFolder");

// Delete folder:
// fs.rmdirSync("nodeFolder");

