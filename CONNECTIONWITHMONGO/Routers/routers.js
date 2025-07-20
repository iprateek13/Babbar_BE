const express = require("express");
const router = express.Router();
const user = require("../Usermodel.js");

//routes->CRUD operations -> view/read

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ success: false, error_message: error.message });
  }
});

router.post("/users", async (req, res) => {
  try{
    const { name, age, weight } = req.body;
    const newuser = new user({ name, age, weight });
    await newuser.save(); //to save use User.save()
    res.status(200).json({
      success: true,
      user: newuser,
    });
  } catch (err) {
    res.status(500).json({ success: false, error_message: err.message });
  }
});
module.exports = router;
