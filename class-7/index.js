const http = require("http");
const {
  readFile,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("./customFunction");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("API working fine");

    // Read students
  } else if (req.url === "/read" && req.method === "GET") {
    const data = readFile();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));

    // Create student
  } else if (req.url === "/create" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const student = JSON.parse(body);
      const newStudent = createStudent(student);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newStudent));
    });

    // Update student
  } else if (req.url.startsWith("/update") && req.method === "PUT") {
    const id = parseInt(req.url.split("/")[2]); // Get ID from URL
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const updatedData = JSON.parse(body);
      const updatedStudent = updateStudent(id, updatedData);
      if (updatedStudent) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(updatedStudent));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Student not found" }));
      }
    });

    // Delete student
  } else if (req.url.startsWith("/delete") && req.method === "DELETE") {
    const id = parseInt(req.url.split("/")[2]); // Get ID from URL
    const isDeleted = deleteStudent(id);
    if (isDeleted) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Student deleted successfully" }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Student not found" }));
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
