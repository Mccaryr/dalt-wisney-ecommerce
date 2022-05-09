require('dotenv').config();

const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL)
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors())
app.use(express.json())

const productsRouter = require('./routes/products')
app.use('/products', productsRouter)

app.listen(5000, () => console.log('Server Started'))