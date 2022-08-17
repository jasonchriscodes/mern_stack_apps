const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

// routes
const books = require("./routes/api/books");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use("/api/books", books);

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
