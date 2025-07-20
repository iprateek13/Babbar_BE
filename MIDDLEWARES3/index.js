const { urlencoded } = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Middleware
const LoggingMiddleware = function (req, res, next) {
  console.log("Loggin middlware hai yeh");
  next();
};
const AuthMiddleware = function (req, res, next) {
  console.log("Auth middlware hai yeh");
//   res.send("bs yhi ruko ,kya kroge aage jake");
  next();
};
const ValidMiddleware = function (req, res, next) {
  console.log("VAlidation middlware hai yeh");
  next();
};
app.use(LoggingMiddleware);
app.use(AuthMiddleware);
app.use(ValidMiddleware);

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Sab thik hai");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
