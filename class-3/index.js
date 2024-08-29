// Import modules
const fs = require("fs");
const math = require("./math.js");

// CRUD Operation:
// Create
// Read
// Update
// Delete

// Asynchronous Operation:

// Create
fs.writeFile("data.txt", "Welcome to node.js world \n", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File successfully created");
  }
});

console.log("This line runs before the execution");

// Read
fs.readFile("data.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Files data:", data);
  }
});

// Append
fs.appendFile("data.txt", "This is appended data \n", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Data appended successfully");
  }
});

// Create folder
fs.mkdir("nodejs", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Folder created successfully");
  }
});

// Delete file
// fs.unlink("data.txt", (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("File deleted successfully");
//   }
// });

// Import and Export :

// console.log(math);
const sum = math.addition(50, 20);
console.log(sum); // 70



// Task :
// 1. Create a folder named "nodejs"
// 2. Create a file named "data.txt" inside the "nodejs" folder
// 3. Write "This is data" inside the "data.txt" file
// 4. Append "This is appended data" inside the "data.txt" file
// 5. Rename the file "data.txt"
// Research about buffer data, encoding and "utf-8"
// Delete both file and folder
// Difference between asynchronous and synchronous with example
