const mongoose = require("mongoose");

module.exports.connectDB = async () => {
  try {
    mongoose.connect(
      process.env.NODE_ENV === undefined
        ? "mongodb://localhost:27017/twitter-bot"
        : process.env.MONGO_URI,
      (err) => {
        if (err) {
          new Error("Error connecting to database");
          console.log(err);
          return;
        }

        console.log("MongoDB Connected");
      }
    );
  } catch (err) {
    console.log(err);
    process.exit(0);
  }
};
