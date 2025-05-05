// Require the following dependencies: express
const express = require("express");

// Create a const variable called app with the value of express()
const app = express();
// Create a const variable called PORT with the value of 8080
const PORT = 8080;
// Require the following dependencies: morgan, helmet and cors
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
// Use these packages as a middleware for this project - helmet, morgan (combined or dev), cors
app.use(morgan("combined"));
app.use(helmet());
app.use(cors());

// Require the following module after the dependencies: path
const path = require("node:path");
// Create six basic GET routes with the following information using the .send() method and the request/response/next parameter:
// PATH: /, HANDLER: "This route points to the Home page
app.get("/", (req, res, next) => {
  res.send("This route points to the homepage. ");
});
// PATH: /api/books, HANDLER: "This will send all of the book data"

app.get("/api/books", (req, res, next) => {
  res.send("This will send all of the book data");
});
// PATH: /api/books/:id, HANDLER:  "This will send a single book by its id"
app.get(" /api/books/:id", (req, res, next) => {
  res.send("This will send a single book by its id");
});
// PATH: /api/books/create/new, HANDLER: "This will create a new book"
app.get("/api/books/create/new", (req, res, next) => {
  res.send("This will create a new book");
});
// PATH: /api/books/update/:id, HANDLER: "This will update a book by its id"
app.get("/api/books/update/:id", (req, res, next) => {
  res.send("This will update a book by its id");
});
// PATH: /api/books/delete/:id, HANDLER: "This will delete a book by its id"
app.get("/api/books/delete/:id", (req, res, next) => {
  res.send("This will delete a book by its id");
});
