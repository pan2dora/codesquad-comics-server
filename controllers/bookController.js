const booksData = require("data/books.js");

// Create a new arrow function named getAllBooks
const getAllBooks = (req, res, next) => {
  try {
    const books = booksData;
    res.status(200).json({
      success: {
        message: "Books Found",
      },
      data: { books },
      statusCode: 200,
    });
  } catch (error) {
    res.status(400).json({
      error: { message: "Not found" },
      statusCode: 400,
    });
  }
};

const getBook = (req, res, next) => {
  //Retrieve the _id from the params objects on the request (req)
  const { _id } = req.params;
  try {
    const book = booksData.find((book) => book._id === _id);
    res.status(200).json({
      success: {
        message: "Book Found",
      },
      data: { book },
      statusCode: 200,
    });
  } catch (error) {
    return res.status(400).json({
      error: { message: "Book not found" },
    });
  }
};

const createBook = (req, res, next) => {
  // destructure
  const {
    title,
    author,
    publisher,
    genre,
    pages,
    raiting,
    synopsis,
    imageUrl,
  } = req.body;

  try {
    const newBook = {
      title,
      author,
      publisher,
      genre,
      pages,
      raiting,
      synopsis,
      imageUrl,
    };

    return res.status(201).json({
      success: { message: "New book created!" },
      data: { newBook },
    });
  } catch (error) {
    return res.status(400).json({
      error: { message: "Book not created" },
    });
  }
};
module.exports = { getAllBooks, getBook };
