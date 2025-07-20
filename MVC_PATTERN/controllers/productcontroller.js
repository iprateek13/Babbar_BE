const Product = require("../models/productmodel.js"); // Fixed import

const getProducts = async (req, res) => {
  try {
    const allproducts = await Product.find();

    if (!allproducts || allproducts.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No products found",
      });
    }

    res.status(200).json({
      success: true,
      Products: allproducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    const { name, price, description, category } = req.body;
    console.log("Extracted values:", { name, price, description, category });
    const newProduct = new Product({ name, price, description, category });
    console.log("Product created, about to save...");
    await newProduct.save();
 console.log("Product saved successfully:", newProduct);
    res.status(201).json({
      success: true,
      product: newProduct,
    });
  } catch (error) {
     console.error("Error in createProduct:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, category } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description, category },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found, cannot delete",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { getProducts, updateProduct, createProduct, deleteProduct };
