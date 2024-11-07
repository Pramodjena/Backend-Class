// Import modules
const express = require("express");
const { connection } = require("./config/db");
const { userModel } = require("./model/user");
const jwt = require("jsonwebtoken");

const app = express();

// Middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ msg: "API is working..." });
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new userModel({ name, email, password });
    await user.save();
    res.send({ msg: "Registered" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send({ msg: "Registration failed", error });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const token = jwt.sign({ auth: "pramod" }, "pramod");
  try {
    const user = await userModel.find({ email, password });
    if (user.length > 0) {
      res.send({ msg: "Login Successful", token: token });
    } else {
      res.status(401).send({ msg: "Invalid Credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ msg: "Login failed", error });
  }
});

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).send({ msg: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, "pramod", (err, decoded) => {
    if (err) {
      return res.status(403).send({ msg: "Invalid token" });
    }
    req.user = decoded;
    next();
  });
};

app.get("/data", verifyToken, (req, res) => {
  res.send({ msg: "Data is here..." });
});

app.get("/cart", verifyToken, (req, res) => {
  res.send({ msg: "Cart is here..." });
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
