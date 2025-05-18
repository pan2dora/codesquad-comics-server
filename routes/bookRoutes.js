// Routes from book Controller
const {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController.js");

const express = require("express");
const router = express.Router();

// PATH: /, HANDLER: "This will send all of the book data"

router.get("/", getAllBooks);

// PATH: //:id, HANDLER:  "This will send a single book by its id"
router.get("/:id", getBook);

// PATH: //create/new, HANDLER: "This will create a new book"
router.post("/create/new", createBook);

// PATH: //update/:id, HANDLER: "This will update a book by its id"
router.put("/update/:id", updateBook);

// PATH: //delete/:id, HANDLER: "This will delete a book by its id"
router.delete("/delete/:id", deleteBook);


module.exports = router;
