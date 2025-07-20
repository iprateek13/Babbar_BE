const express = require("express");
const app = express();
const port = 3000;
const routes = require("./Allroutes/routes.js");
app.use("/route",routes)

// app.get("/", (req, res) => {
//   res.send("got a GET request");
// });
// app.post("/items", (req, res) => {
//   //   res.send("got a POST request");
//   res.json({ x: 1, y: 2 });
// });
// app.put("/items/:id", (req, res) => {
//   res.send("got a PUT request");
// });
// app.delete("/items/:id", (req, res) => {
//   res.send("got a DELETE request");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
