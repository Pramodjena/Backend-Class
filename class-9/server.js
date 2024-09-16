// Import express
const express = require("express");
require("dotenv").config();
const app = express();
const { readData, writeData } = require("./customFunction.js");

// Middlewares
app.use(express.json());

// Define a route
app.get("/", (req, res) => {
  res.send("API is working");
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await readData(); // all users
    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.send(users);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});

// Post a user
app.post("/user", async (req, res) => {
  try {
    const { id, name, age } = req.body;
    const newUser = { id, name, age };
    const users = await readData(); // all users
    users.push(newUser);
    await writeData(users); // write data to file
    res.json(newUser);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
  }
});

// How to find query in URL
app.get("/query", (req, res) => {
  const { movie } = req.query;
  res.send(`Your query is ${movie}`);
});

// How to find params in URL
app.get("/params/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Your params id is ${id}`);
});

// Delete a user
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const users = await readData(); // all users
    const index = users.findIndex((user) => user.id === parseInt(id));
    if (index !== -1) {
      users.splice(index, 1);
      await writeData(users); // write data to file
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
  }
});

// Start the express server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
