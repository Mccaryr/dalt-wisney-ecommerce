const express = require('express');
const cart = require('../models/cart');
const router = express.Router();


// router.post('/', async (req, res) => {
//     const reqCartItem = {user_email: req.body.user_email, product_name: req.body.product_name, qty: req.body.qty}
//     const newCartItem = new cart(reqCartItem);
    
//     try {
//         newCartItem.save();
//         console.log(newCartItem);
//     } catch(error) {
//         res.status(500).json({ message: error.message })
//     }
// })

router.put('/', async (req, res) => {
    
    const reqCartItem = {user_email: req.body.user_email, cart:req.body.cart}
    const newCart = new cart(reqCartItem);

    try {
        newCart.save();
        console.log(newCart)
    } catch(error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = router