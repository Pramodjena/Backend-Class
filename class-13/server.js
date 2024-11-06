// Import modules
const express = require("express");
const { connection } = require("./config/db");
const { userModel } = require("./model/user");

const app = express();

// Middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "API is working..." });
});

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new userModel({ name, email, password });
    await user.save();
  } catch (error) {
    console.log(error);
  }
  res.send({ msg: "Registered" });
});

app.post("/login", async () => {
  try {
  } catch (error) {}
});

// Run the server
app.listen(8080, async () => {
  try {
    await connection;
    console.log("Database connection successfull");
  } catch (error) {
    console.log(error);
  }
  console.log("Server is running at 8080");
});
