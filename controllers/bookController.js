const booksData = require("../data/books.js");

// Create a new arrow function named getAllBooks
const getAllBooks = (req, res, next) => {
  try {
    const books = booksData;
    return res.status(200).json({
      success: {
        message: "Books Found",
      },
      data: { books },
      statusCode: 200,
    });
  } catch (error) {
    return res.status(400).json({
      error: { message: "Not found" },
      statusCode: 400,
    });
  }
};

const getBook = (req, res, next) => {
  //Retrieve the _id from the params objects on the request (req)
  const { id } = req.params;
  try {
    const book = booksData.find((book) => book._id === id);
    return res.status(200).json({
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

const createBook = async (req, res, next) => {
    
  // destructure
  const { title, author, publisher, genre, pages, rating, synopsis, imageUrl } =
    req.body;

console.log("BODY RECEIVED:", req.body);
 

  try {
       const newBook = {
      title,
      author,
      publisher,
      genre,
      pages,
      rating,
      synopsis,
      imageUrl,
    };
    
    //Wouldn't work with postman the way the hw described but found this way in slides
  

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

const updateBook = (req, res, next) => {
  const { title, author, publisher, genre, pages, rating, synopsis, imageUrl } =
    req.body;
  const { _id } = req.params;
  try {
    const updatedBook = {
      title,
      author,
      publisher,
      genre,
      pages,
      rating,
      synopsis,
      imageUrl,
    };
    return res.status(201).json({
      success: { message: "Book updated!" },
      date: { updatedBook },
    });
  } catch (error) {
    return res.status(400).json({
      error: { message: "Book not updated!" },
    });
  }
};

const deleteBook = (req, res, next) => {
  const { _id } = req.params;

  try {
    const books = booksData.filter((book) => book._id !== _id);
    return res.status(200).json({
      success: { message: "Book deleted!" },
      data: { books },
    });
  } catch (error) {
    return res.status(400).json({
      error: { message: "Books not deleted!" },
    });
  }
};

module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };
