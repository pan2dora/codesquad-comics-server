require("dotenv").config(); //summon dotenv lib
require("./config/connection.js"); //use connect to db
require("./config/authStrategy.js"); //auth

// Require the following dependencies: express
const express = require("express");

// Require the following dependencies: morgan, helmet and cors
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const methodOverride = require("method-override");
const bookRoutes = require("./routes/bookRoutes.js");
const authRoutes = require("./routes/authRoutes");
app.use(methodOverride("_method"));
// Note: Order of where this goes is important!!
// Create a const variable called app with the value of express()
const app = express();
// Create a const variable called PORT with the value of 8080
const PORT = process.env.PORT || 8080;

// Use these packages as a middleware for this project - helmet, morgan (combined or dev), cors

app.use(helmet());
app.use(cors({ credentials: true, origin: true }));
app.use(morgan("combined"));
// app.use(methodOverride("_method"));
const path = require("node:path");
// # ADD more middleware to app.js before the routes

// Remember to use the right syntax and options
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/books", bookRoutes);
app.use("/api", authRoutes);
// Require the following module after the dependencies: path

//Error handling middleware
app.use((err, req, res, next) => {
  if (err.code === 11000) {
    return res.status(err.status || 400).json({
      error: { message: "Already have an account? Try logging in." },
      statusCode: err.status || 400,
    });
  }
  return res.status(err.status || 500).json({
    error: { message: err.message || "Internal server error." },
    statusCode: err.status || 500,
  });
});

// Create six basic GET routes with the following information using the .send() method and the request/response/next parameter:
// PATH: /, HANDLER: "This route points to the Home page

app.get("/", (req, res, next) => {
  res
    .status(200)
    .json({ success: { message: "This route points to the Home page" } });
});

app.listen(PORT, () => {
  console.log(`This server is listening on http://localhost/${PORT}`);
});
