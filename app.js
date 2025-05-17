// Require the following dependencies: express
const express = require("express");


// Require the following dependencies: morgan, helmet and cors
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes.js")
// Note: Order of where this goes is important!!
// Create a const variable called app with the value of express()
const app = express();
// Create a const variable called PORT with the value of 8080
const PORT = 3000;

// Use these packages as a middleware for this project - helmet, morgan (combined or dev), cors
app.use(morgan("combined"));
app.use(helmet());
app.use(cors());

app.use("/api/books", bookRoutes)
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
  res
    .status(200)
    .json({ success: { message: "This route points to the Home page" } });
});


app.listen(PORT, () => {
  console.log(`This server is listening on http://localhost/${PORT}`);
});
