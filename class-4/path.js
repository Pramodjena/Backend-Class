// Path Module :

const path = require("path");
// console.log(path);
const rootDir = path.resolve(__dirname, "..");
console.log(rootDir); // C:\Users\hp\OneDrive\Desktop\Backend-Class

const join_path = path.join(rootDir, "class-4", "path.js");
console.log(path.join(rootDir, "class-4", "path.js"));
console.log(path.extname(join_path)); // .js
console.log(path.parse(join_path));
