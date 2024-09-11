const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.json");

// Read file
const readFile = () => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

// Write/Create file
const writeFile = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
};

// Create a new entry
const createStudent = (student) => {
  const data = readFile();
  data.students.push(student);
  writeFile(data);
  return student;
};

// Update student by ID
const updateStudent = (id, updatedData) => {
  const data = readFile();
  const studentIndex = data.students.findIndex((student) => student.id === id);
  if (studentIndex !== -1) {
    data.students[studentIndex] = {
      ...data.students[studentIndex],
      ...updatedData,
    };
    writeFile(data);
    return data.students[studentIndex];
  } else {
    return null;
  }
};

// Delete student by ID
const deleteStudent = (id) => {
  const data = readFile();
  const filteredStudents = data.students.filter((student) => student.id !== id);
  if (filteredStudents.length !== data.students.length) {
    writeFile({ students: filteredStudents });
    return true;
  } else {
    return false;
  }
};

module.exports = {
  readFile,
  writeFile,
  createStudent,
  updateStudent,
  deleteStudent,
};
