## File System :

- In Node.js, file system operations are actions that involve interacting with the file system, such as reading, writing, deleting, or updating files. These operations can be performed in two ways: synchronously or asynchronously.

### Types :

- Synchronous Operations: These operations block the execution of code until the operation is complete. This means the entire program has to wait for the file system operation to finish before it can move on to the next task.

- Asynchronous Operations: These operations allow the program to continue executing other tasks while the file system operation is in progress. When the operation completes, a callback function is triggered to handle the result.

## How Asynchronous File System Operations Work in Node.js

- Asynchronous file system operations in Node.js are made possible by the fs module. When you perform an asynchronous operation, Node.js doesn’t wait for it to complete. Instead, it registers a callback function and continues executing the next lines of code. Once the operation is complete, the callback function is invoked with the results.
