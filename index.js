require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const orderRouter = require("./routes/order.routes");
const shopRouter = require("./routes/shop.router");

const app = express();
const PORT = process.env.PORT || 5000;
const dbUrl = process.env.dbUrl;

app.use(cors());
app.use(express.json());
app.use("/api/order", orderRouter);
app.use("/api/shop", shopRouter);

const start = async () => {
  try {
    await mongoose.connect(dbUrl);

    app.listen(PORT, () => {
      console.log(`Hello Wolrd port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
