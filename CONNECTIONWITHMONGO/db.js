const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log(`mongodb+srv://prateek13:prateek233001@clusterone.f6krgcf.mongodb.net`);
    const conn = await mongoose.connect(process.env.Mongodb_uri);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
  }
};
module.exports = connectDB;
