const express = require('express');
const router = express.Router();
const User = require('../models/user')

//get one user based on email

router.get('/:email', async (req,res) => {
    const reqUser = await User.find({user_email:req.params.email}).then((result)=>{
        res.json(result)
    })
})

module.exports = router