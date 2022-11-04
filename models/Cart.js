const mongoose = require("../config/db")

const CartSchema = mongoose.Schema({
  pname: String,
  price: Number,
  quantity: Number
})

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;