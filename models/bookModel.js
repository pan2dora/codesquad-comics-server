const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  publisher: {
    type: String,
  },
  genre: {
    type: String,
  },
  pages: {
    type: Number,
    required: true,
  },
  rating: {
    type: String,
  },
  synopsis: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
