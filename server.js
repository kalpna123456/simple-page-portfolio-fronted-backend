const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// React build folder
app.use(express.static(path.join(__dirname, "../build")));

// MongoDB Connection
mongoose
  .connect("mongodb+srv://kalpna:xjbiZnAIbVLUTRnj@cluster0.eqwffvd.mongodb.net/contactfromfrontedbackendportfolio")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

// Schema
const contactSchema = new mongoose.Schema({
    name: String,
    lastname:String,
  email: String,
  message: String,
});

// Model
const Contact = mongoose.model("contactfilereact", contactSchema);

// React Routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// Contact API
app.post("/contact", async (req, res) => {

    const { name, lastname,email, message } = req.body;

    await Contact.create({
      name,
      lastname,
      email,
      message,
    });

  res.send(`${name} full`);
});



// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
// module.exports = app;

// node server.js 