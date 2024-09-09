const fs = require("fs");

const readFile = () => {
  const filePath = "data.json";
  const data = fs.readFileSync(filePath);
  const parseData = JSON.parse(data);
  return parseData;
};

module.exports = { readFile };
