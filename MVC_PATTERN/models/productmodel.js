const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  price: {
    type: Number,  // ✅ Fixed: Capital N
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    maxlength: 50,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductModel = model("Product", ProductSchema);

module.exports = ProductModel;