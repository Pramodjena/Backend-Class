const fs = require("fs");

const readData = () => {
  const data = fs.readFileSync("data.json", "utf8");
  return JSON.parse(data);
};

const writeData = (data) => {
  const newData = JSON.stringify(data);
  fs.writeFileSync("data.json", newData);
};

module.exports = { readData, writeData };
