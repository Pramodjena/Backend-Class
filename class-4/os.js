// Os module :
// - Os module is used to interact with the operating system.
// - It provides functions to interact with the file system, environment variables, and other OS-related tasks
// - It is a built-in module in Node.js

const os = require("os");
// console.log(os);

console.log(os.platform()); // win32
console.log(os.arch()); // x64
console.log(os.type()); // Windows_NT
console.log(os.release()); // 10.0.22631
console.log(os.version()); // Windows 10 Home Single Language
console.log(os.homedir()); // C:\Users\hp
console.log(os.hostname()); // DESKTOP-JB47NQB
console.log(os.userInfo()); //
console.log(os.userInfo().username); // hp
console.log(os.freemem(`${911233024 / 1024 / 1024 / 1024}`));
const totalMemory = os.totalmem();
console.log(os.totalmem(`${totalMemory / 1024 / 1024 / 1024}`));

console.log(os.tmpdir()); // C:\Users\hp\AppData\Local\Temp


