const mongoose = require("mongoose");
require("dotenv").config();

const connectToMongoDB = async (callback) => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DataBase Connected");
    callback();
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connectToMongoDB };
