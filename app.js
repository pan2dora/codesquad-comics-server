require("dotenv").config(); //summon dotenv lib
require("./config/connection.js"); //use connect to db
require("./config/authStrategy.js"); //auth
//middlware
const express = require("express");
const morgan = require("morgan");
const path = require("node:path");
const helmet = require("helmet");
const cors = require("cors");

// Auth
const session = require("express-session");
const passport = require("passport");

const app = express();
// Create a const variable called PORT with the value of 8080
const PORT = process.env.PORT || 8080;

//Routing
const bookRoutes = require("./routes/bookRoutes.js");
const authRoutes = require("./routes/authRoutes");

// Use these packages as a middleware for this project - helmet, morgan (combined or dev), cors

app.use(helmet());
app.use(morgan("combined"));
app.use(cors({ credentials: true, origin: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")));

//content routes
app.use("/api/books", bookRoutes);
app.use("/auth", authRoutes);
// Require the following module after the dependencies: path

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SECRECT_KEY,

    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

//Error handling middleware
app.use((err, req, res, next) => {
  if (err.code === 11000) {
    return res.status(err.status || 400).json({
      error: { message: "Already have an account? Try logging in." },
      statusCode: err.status || 400,
    });
  } else {
    console.log("Passed error handling middleware");
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
  console.log(`This server is listening on http://localhost:${PORT}`);
});
