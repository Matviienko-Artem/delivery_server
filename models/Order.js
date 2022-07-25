const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
  cart: [],
  totalOrderPrice: { type: Number, required: true },
});

module.exports = model("order", orderSchema);
