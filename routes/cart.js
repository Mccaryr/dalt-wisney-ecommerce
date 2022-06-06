const express = require('express');
const { Mongoose, default: mongoose } = require('mongoose');
const cart = require('../models/cart');
const router = express.Router();


router.put('/:user_id', async (req, res) => {
    const user_id = req.params.user_id
    const cart_array = req.body.cart

    let usersCart = await cart.findOneAndUpdate({user_id: user_id}, {cart: cart_array}, {new: true, upsert: true}).then((err) => {
            if (err){
                res.send({message: err})
            }
            else {
                res.send(usersCart)
            }  
        })
});

router.get('/:user_id', async (req, res) => {
    const user_id = req.params.user_id
    try {
        let userCart = await cart.findOne({user_id: user_id})
        res.send(userCart)
        
    } catch(err) {
        res.send({message: err})
    }
    
})

/*
Better design pattern to separate routers, models, and controllers

    router
        .route('/')
        .get(controllers.getexample)
        .post(controllers.createexample)


    router
        .route('/:id')
        .get()
        .put()
        .delete()
**/

module.exports = router