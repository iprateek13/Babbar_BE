const express = require("express");
const router = express.Router();
const { getProducts, updateProduct, createProduct, deleteProduct } = require("../controllers/productcontroller");

router.get("/products", getProducts);
router.put("/product/:id", updateProduct);    // "/" added
router.post("/product", createProduct);       // trailing "/" removed
router.delete("/product/:id", deleteProduct); // ":id" added

module.exports = router;