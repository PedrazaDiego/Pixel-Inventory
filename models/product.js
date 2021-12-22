const { Schema } = require('mongoose')

const Product = new Schema(
    {
        name: {type: String, required: true},
        cost: Number,
        price: {type: Number, required: true},
        category: String,
        description: String,
        quantity: String,
        provider: 
            {type: Schema.Types.ObjectId, ref: 'provider_id'},
        history: 
            {type: Schema.Types.ObjectId, ref: 'logs'}
    },
    {timestamps: true}
)

module.exports = Product