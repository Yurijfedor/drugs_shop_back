const mongoose = require("mongoose");

const userCartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      drug: { type: mongoose.Schema.Types.ObjectId, ref: "Drug" },
      quantity: { type: Number, default: 1 },
    },
  ],
});

const UserCart = mongoose.model("UserCart", userCartSchema);

module.exports = UserCart;
