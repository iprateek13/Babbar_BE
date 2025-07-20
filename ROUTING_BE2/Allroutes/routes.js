const express = require("express");

const router = express.Router();

const timeLog = (req, res, next) => {
  console.log("Time: ", Date.now()); // Log the current time
  next(); // Pass control to the next middleware or route handler
};

// Use the middleware for all routes in this router
router.use(timeLog);

// ROUTES
// GET request to "/route/" or wherever this router is mounted
router.get("/", (req, res) => {
  res.send("got a GET request");
});

// POST request to "/route/items"
router.post("/items", (req, res) => {
  res.json({ x: 1, y: 2 });
});

// PUT request to "/route/items/:id" (with a route parameter `id`)
router.put("/items/:id", (req, res) => {
  res.send("got a PUT request");
});

// DELETE request to "/route/items/:id"
router.delete("/items/:id", (req, res) => {
  res.send("got a DELETE request");
});

module.exports = router;
