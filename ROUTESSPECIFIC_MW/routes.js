const express = require("express");
const router = express.Router();
//ROUTES-SPECIFIC MIDDLEWARES
// middleware that is specific to this router
const auth = function (req, res, next) {
  console.log("Main auth wala middleware hu");

  //dummy user
  req.user = { userId: 1, role: "admin" };
  if (req.user) {
    //if a valid user is there in req , then proceed
    // to the next middleware
    next();
  } else {
    res.json({
      success: true,
      message: "Not a valid user",
    });
  }
};
const isStudent = function (req, res, next) {
  console.log("main valid student wala middleware hu");

  if (req.user.role === "student") {
    next();
  } else {
    res.json({
      success: false,
      message: "Access denied! only for the student",
    });
  }
};
const isAdmin = function (req, res, next) {
  console.log("main admin wala middleware hu");

  if (req.user.role === "admin") {
    next();
  } else {
    res.json({
      success: false,
      message: "Access denied! only for the admin",
    });
  }
};

router.get("/student", auth, isStudent, (req, res) => {
  console.log("I AM INSIDE STUDENT ROUTE");
  res.send("Student specific page");
});
router.get("/admin", auth, isAdmin, (req, res) => {
  console.log("I AM INSIDE ADMIN ROUTE");
  res.send("Admin specific page");
});
module.exports = router;
