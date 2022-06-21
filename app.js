require("dotenv").config({ path: __dirname + "/config/.env" });
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const fs = require("fs/promises");
const { connectDB } = require("./config/db");
// Essential Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// Connect to Database
connectDB();

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on port PORT ${PORT}`);
});
