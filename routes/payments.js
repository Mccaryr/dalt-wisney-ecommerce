const express = require('express');
const cart = require('../models/cart');

const router = express.Router();

router.post('/checkout', async (req, res) => {
    const { user } = req.body;
    /**
     * Temp code until I build out Order functionality
     */
    try {
        const deletedCart = await cart.findOneAndDelete({user_id: user._id})
        if(!deletedCart) {
            res.status(404).send({message:'No cart found.'})
        }
        res.status(201).send({message: 'Order Placed!'})

    } catch(err) {
        return res.status(500).send({error: err, message:"Payment failed."});
    }
})

module.exports = router;