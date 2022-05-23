const express = require('express');
const cart = require('../models/cart');
const router = express.Router();
const Cart = require('../models/cart')

router.post('/', async (req, res) => {
    const cartItems = {user_email: req.body.user_email, cart: req.body.cart}
    const newCartItem = new cart(cartItems);

    try {
        newCartItem.save();
        console.log(newCartItem);
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router