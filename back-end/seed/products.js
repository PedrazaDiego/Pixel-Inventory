const db = require('../db')
const Product = require('../models/index')


db.on('error', console.error.bind(console, 'MongoDB conection error'))

const main = async () => {
    const products = [
        {
            name: 'meat',
            cost: 2.00,
            price: 2.10,
            category: 'grocery',
            
        }
    ]
}