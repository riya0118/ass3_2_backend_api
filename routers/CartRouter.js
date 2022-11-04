const router = require("express").Router();
const Cart = require("../models/Cart")

router.post("/", (req, res) => {
  var cart1 = new Cart({
    pname: req.body.pname,
    price: req.body.price,
    quantity: req.body.quantity
  })
  cart1.save((err, cart) => {
    res.send(cart);
    console.log(cart);
  })
})

router.get("/", (req, res) => {
  Cart.find((err, carts) => {
    console.log(carts);
    res.send(carts);
  })
})

router.get("/:id", (req, res) => {
  Cart.findById({_id: req.params.id}, (err, cart) => {
    console.log(cart);
    res.send(cart);
  })
})

router.put("/:id", (req, res) => {
  Cart.findOneAndUpdate({"_id": req.params.id}, req.body, {new: true}, (err, cart) => {
    if(err) return res.status(500).send("There was a problem while updating cart");
    res.status(200).send(cart);
  })
})

router.delete("/:id", (req, res) => {
  Cart.findOneAndRemove({_id: req.params.id}, (err, cart) => {
    console.log(cart);
    res.send(cart)
  })
})

module.exports = router