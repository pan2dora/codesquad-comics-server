const register = async (req, res, next) => {
  const { firstName, lastName, username, password } = req.body;
  console.log("This works", req.body);
  try {
    return res.status(201).json({
      success: { message: "New User Created!" },
      data: { newUser },
    });
  } catch (error) {
    return res.status(500).json({
      error: { message: "Internal Server Error!" },
    });
  }
};

const login = async (req, res, next) => {
  try {
    return res.status(200).json({
      success: { message: "User Logged in" },
    });
  } catch (error) {
    return res.status(500).json({
      error: { message: "User not logged in!" },
    });
  }
};

const logout = async (req, res, next) => {
  console.log("Initializing logout controller logic...");
  console.log("Session Destroyed");
  response.clearCookie("connect.sid");
  res.status(200).json({
    success: { message: "User Logged out!" },
    statusCode: 200,
  });
  function sessionDestruction(err) {
    //error handling as a final check and a failsafe
    if (err) {
      return next(err);
    }
  }
  sessionDestruction();
  console.log("Logout function activated. Logging out...");
};

const localLogin = async (req, res, next) => {
  let result = true;
  function mockPassport(err, user) {
    //error handling as a final check and a failsafe
    if (err) {
      return next(err);
    }
  }
  //call the mockPassport feature
  mockPassport();

  response.status(200).json({
    success: { message: "Login Successful" },
    data: { result },
  });
};

module.exports = { register, login, logout, localLogin };
