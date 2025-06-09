const express = require("express");
const passport = require("passport");
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

//Auth
router.get("login/google", { scope: ["profile", "email"] });

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    successRedirect: "/dashboard",
  })
);

//Advanced routes

const checkAuthentication = (req, res, next) => {
  if (!response.result) {
    return next();
  } else if (res.ok && !req.isAuthenticated()) {
    res
      .json("Warning: user is nor authenticated")
      .redirect(403, "/unauthenticated");
  }
};

router.get("/admin", checkAuthentication, (req, res, next) => {
  console.log("Passed admin, authenticating user");
  try {
    if (localLogin.call(response.result)) {
      function auth() {
        console.log("Auth successful within admin");

        res.json("Authenticated via route").redirect("/auth-console");
      }
      auth();
    }
  } catch (error) {
    res.redirect("/unauthenticated");
  }
});
route.get("/admin/auth-console", (req,res,next)=>{
  res.json("The user is authenticated within the auth console")
})


router.get("/unauthenticated", (req, res, next) => {
  console.log("Returning to homepage...");
  res.redirect("/");
});

module.exports = router;
