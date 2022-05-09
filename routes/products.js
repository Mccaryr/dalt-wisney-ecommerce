const express = require('express')
const router = express.Router();
const Product = require('../models/product')

//Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
})


//Get one product
router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findById(id)
        res.json(product)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router