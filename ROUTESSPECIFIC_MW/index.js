const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes.js");
app.use("/api", routes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
