const mongoose = require('mongoose')
const ProductSchema = require('./Product')
const ProviderSchema = require('./Provider')

const Product = mongoose.model('products', ProductSchema)
const Provider = mongoose.model('providers',ProviderSchema)

module.exports = {
    Product,
    Provider,
}