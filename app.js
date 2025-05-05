// Require the following dependencies: express
const express = require("express");

// Create a const variable called app with the value of express()
const app = express();
// Create a const variable called PORT with the value of 8080
const PORT = 3000;
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
// # ADD more middleware to app.js before the routes

// Remember to use the right syntax and options
app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// Create six basic GET routes with the following information using the .send() method and the request/response/next parameter:
// PATH: /, HANDLER: "This route points to the Home page
app.get("/", (req, res, next) => {
  //   res.send("This route points to the homepage. ");
  res.status(200).json({
    success: { message: "This route points to the homepage." },
    statusCode: 200,
  });
});
// PATH: /api/books, HANDLER: "This will send all of the book data"

app.get("/api/books", (req, res, next) => {
  //   res.send("This will send all of the book data");
  res.status(200).json({
    success: { message: "This will send all of the book data" },
    statusCode: 200,
  });
});
// PATH: /api/books/:id, HANDLER:  "This will send a single book by its id"
app.get(" /api/books/:id", (req, res, next) => {
  //   res.send("This will send a single book by its id");
  res.status(200).json({
    success: { message: "This will send a single book by its id" },
    statusCode: 200,
  });
});
// PATH: /api/books/create/new, HANDLER: "This will create a new book"
app.get("/api/books/create/new", (req, res, next) => {
  //   res.send("This will create a new book");
  res.status(200).json({
    success: { message: "This will create a new book" },
    statusCode: 200,
  });
});
// PATH: /api/books/update/:id, HANDLER: "This will update a book by its id"
app.get("/api/books/update/:id", (req, res, next) => {
  //   res.send("This will update a book by its id");
  res.status(200).json({
    success: { message: "This will update a book by its id" },
    statusCode: 200,
  });
});
// PATH: /api/books/delete/:id, HANDLER: "This will delete a book by its id"
app.get("/api/books/delete/:id", (req, res, next) => {
  //   res.send("This will delete a book by its id");
  res.status.json({
    success: { message: "This will delete a book by its id" },
    statusCode: 200,
  });
});

app.listen(PORT, () => {
  console.log(`This server is listening on http://localhost/${PORT}`);
});
