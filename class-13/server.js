// Import modules
const express = require("express");
const { connection } = require("./config/db");
const { userModel } = require("./model/user");
const jwt = require("jsonwebtoken");

const app = express();

// Middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ msg: "API is working..." });
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new userModel({ name, email, password });
    await user.save();
    res.status(200).send({ msg: "Registered" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send({ msg: "Registration failed", error });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const token = jwt.sign({ auth: "jwt" }, "pramod");
  try {
    const user = await userModel.find({ email, password });
    if (user.length > 0) {
      res.status(200).send({ msg: "Login Successful", token: token });
    } else {
      res.status(401).send({ msg: "Invalid Credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ msg: "Login failed", error });
  }
});

app.get("/data", (req, res) => {
  // const { token } = req.query;
  const token = req.headers.authorization;
  jwt.verify(token, "pramod", (err, decoded) => {
    try {
      if (decoded) {
        // console.log(decoded.auth);
        res.status(200).send({ msg: "Data is here..." });
      } else {
        res.status(401).send({ msg: err.message });
      }
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  });
});

app.get("/cart", (req, res) => {
  // const { token } = req.query;
  const token = req.headers.authorization;
  jwt.verify(token, "pramod", (err, decoded) => {
    try {
      if (decoded) {
        res.status(200).send({ msg: "Cart is here..." });
      } else {
        res.status(401).send({ msg: err.message });
      }
    } catch (error) {
      res.status(500).send({ msg: error.message });
    }
  });
});

// Run the server
app.listen(8080, async () => {
  try {
    await connection;
    console.log("Database connection successful");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
  console.log("Server is running at 8080");
});
