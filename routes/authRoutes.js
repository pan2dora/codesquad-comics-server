const express = require("express");

const router = express.Router();

const {
  register,
  login,
  logout,
  localLogin,
} = require("../controllers/authControllers");

router.post("/register", register);
router.get("/login", login);
router.get("/login/error", (req, res, next) => {
  return res.json("Login Error!");
});
router.get("/logout", logout);
router.get("/login/local", localLogin);
router.get("/unauthenticated", (req, res, next) => {
  console.log("Returning to homepage...");
  response.redirect("/");
});

module.exports = router;
