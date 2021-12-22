const mongoose = require('mongoose')
require('dotenv').config()

// let MONGODB_URI = 'mongodb://127.0.0.1:27017/inventoryDatabase'
let MONGODB_URI='mongodb+srv://<username>:pedraza@<cluster>.i57hr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


mongoose
    .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db