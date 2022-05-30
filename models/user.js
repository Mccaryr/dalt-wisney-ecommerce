const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    user_email: {type:String, required: true}
})

module.exports = mongoose.model('User', userSchema)