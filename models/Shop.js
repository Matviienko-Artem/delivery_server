const { Schema, model } = require("mongoose");

const shopSchema = new Schema({
  name: { type: String, required: true, unique: true },
  menu: [
    {
      dish: { type: String, required: true },
      img: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
});

module.exports = model("shop", shopSchema);
