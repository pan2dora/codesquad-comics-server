const express = require("express");
const router = express()

// PATH: /, HANDLER: "This will send all of the book data"

router.get("/", (req, res, next) => {
  //   res.send("This will send all of the book data");
  res.status(200).json({
    success: { message: "This will send all of the book data" },
    statusCode: 200,
  });
});
// PATH: //:id, HANDLER:  "This will send a single book by its id"
router.get("/:id", (req, res, next) => {
  //   res.send("This will send a single book by its id");
  res.status(200).json({
    success: { message: "This will send a single book by its id" },
    statusCode: 200,
  });
});
// PATH: //create/new, HANDLER: "This will create a new book"
router.post("/create/new", (req, res, next) => {
  //   res.send("This will create a new book");
  res.status(200).json({
    success: { message: "This will create a new book" },
    statusCode: 200,
  });
});
// PATH: //update/:id, HANDLER: "This will update a book by its id"
router.put("/update/:id", (req, res, next) => {
  //   res.send("This will update a book by its id");
  res.status(200).json({
    success: { message: "This will update a book by its id" },
    statusCode: 200,
  });
});
// PATH: //delete/:id, HANDLER: "This will delete a book by its id"
router.delete("/delete/:id", (req, res, next) => {
  //   res.send("This will delete a book by its id");
  res.status(200).json({
    success: { message: "This will delete a book by its id" },
    statusCode: 200,
  });
});

module.exports = router;
