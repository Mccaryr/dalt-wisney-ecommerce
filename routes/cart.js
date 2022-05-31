const express = require('express');
const { Mongoose, default: mongoose } = require('mongoose');
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

router.put('/:user_id', async (req, res) => {
    const user_id = req.params.user_id
    const user_email = req.body.user_email
    const cart_array = req.body.cart
    console.log("got to BE");
    const newCart = new cart({user_email: user_email, user_id: user_id, cart: cart_array})

       let doc = await cart.findOneAndUpdate({user_id: user_id}, {cart: cart_array}, {new: true, upsert: true}).then((err) => {
            if (err){
                console.log(err)
            }  
        })
})

module.exports = router