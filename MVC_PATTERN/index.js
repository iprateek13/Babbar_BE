const express = require("express");
const connectDB = require("./config/db");
const productroute = require("./routes/productroute");
const dotenv = require("dotenv");
dotenv.config()
const app = express();

connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("response bhej diya");
  res.send("hello jii");
});

app.use("/api", productroute); // PEHLE routes define karo

app.listen(3000, () => {        // PHIR server start karo
  console.log("Port listening at 3000");
});
