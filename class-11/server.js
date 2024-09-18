// app.js
const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

// Initialize dotenv to use environment variables from .env file
dotenv.config();

const app = express();
const port = 3000;

// Middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
  res.send(`<form action="/send-email" method="POST">
    <input type="text" name="to" placeholder="Recipient Email" required/>
    <input type="text" name="subject" placeholder="Subject" required/>
    <textarea name="message" placeholder="Message" required></textarea>
    <button type="submit">Send Email</button>
  </form>`);
});

// Route to handle email sending
app.post("/send-email", async (req, res) => {
  const { to, subject, message } = req.body;

  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      text: message,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    res.send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.send("Failed to send email.");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
