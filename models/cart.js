const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user_email: {type: String, required: true},
    cart: {type: Array, required: true}
}, {timestamps: true})

module.exports = mongoose.model('Cart', cartSchema);