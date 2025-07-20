const express = require("express");
const connectDB = require("./db");
const app = express();
const routes = require("./Routers/routers.js");
const port = 3000;
app.use("/api", routes);
app.use(express.json());
//connect to database
connectDB();
app.get("/", (req, res) => {
  console.log("main home page route hu");
  res.send("hello jee, Main prateek hu");
});

app.listen(port, (req, res) => {
  console.log("server is listening on port 3000");
});
