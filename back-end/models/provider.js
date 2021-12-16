const { Schema } = require('mongoose')

const Provider = new Schema(
    {
        name: {type: String, required: true},
        details: String,
        url: String
    },
    {timestamps: true}
)

module.exports = Provider