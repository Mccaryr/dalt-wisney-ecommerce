const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user_email: {type: String, required: true}, 
    user_id: {type: mongoose.Types.ObjectId, required: true},
    cart: {type: Array, required: true},
    qty: {type: Number, required: true}
}, {timestamps: true})

module.exports = mongoose.model('Cart', cartSchema);