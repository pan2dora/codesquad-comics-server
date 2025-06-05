const Book = require("../models/bookModel");

// const booksData = require("../data/books.js");

// Create a new arrow function named getAllBooks
const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find({});

    return res.status(200).json({
      success: {
        message: "Books Found",
      },
      data: { books },
      statusCode: 200,
    });
  } catch (error) {
    return next(error);
  }
};

const getBook = async (req, res, next) => {
  //Retrieve the _id from the params objects on the request (req)
  const { id } = req.params;

  try {
    if (!_id) {
      throw new Error("Id is required");
    }
    const book = Book.findById(_id);

    if (!book) {
      throw new Error("Book not found");
    }

    // const book = booksData.find((book) => book._id === id);
    return res.status(200).json({
      success: {
        message: "Book Found",
      },
      data: { book },
    });
  } catch (error) {
    return next(error);
  }
};

const createBook = async (req, res, next) => {
  // destructure
  const { title, author, publisher, genre, pages, rating, synopsis, imageUrl } =
    req.body;

  console.log("BODY RECEIVED:", req.body);
  //value check

  try {
    if (!title || !author || !pages) {
      throw new Error("Missing required fields");
    }

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

    //push new entries from bookIventory and await newBook, save using save method
    await newBook.save();
    return res.status(201).json({
      success: { message: "New book created!" },
      data: { newBook },
      statusCode: 201,
    });
  } catch (error) {
    return next(error);
  }
};

const updateBook = async (req, res, next) => {
  const { title, author, publisher, genre, pages, rating, synopsis, imageUrl } =
    req.body;
  const { _id } = req.params;
  try {
    if (!title || !author || !pages) {
      throw new Error("Missing required fields");
    }

    const updatedBook = await Book.findByIdAndUpdate(
      _id,
      {
        $set: {
          title,
          author,
          publisher,
          genre,
          pages,
          rating,
          synopsis,
          imageUrl,
        },
      },
      { new: true }
    );

    //update book check
    if (!updateBook) {
      throw new Error("Book not found");
    }

    return res.status(201).json({
      success: { message: "Book updated!" },
      data: { updatedBook },
      statusCode: 201,
    });
  } catch (error) {
    return next(error);
  }
};

const deleteBook = async (req, res, next) => {
  const { _id } = req.params;

  try {
    if (!_id) {
      throw new Error("Id is required");
    }
    // const books = booksData.filter((book) => book._id !== _id);
    await Book.findByIdAndDelete(_id);

    return res.status(200).json({
      success: { message: "Book deleted!" },
      statusCode: 200,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };
