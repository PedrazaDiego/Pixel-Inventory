const { Schema } = require('mongoose')

const History = new Schema(
    {
        quantity: Number,
        log: String,
    },
    {timestamps: true}
)

module.exports = History