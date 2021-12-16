const db = require('../db')
const { Product } = require('../models/index')
console.log(Product)


db.on('error', console.error.bind(console, 'MongoDB conection error'))

const main = async () => {

    const thriveMarket = await Provider.find({name: 'Thrive Market'})
    const instacart = await Provider.find({name: 'instacart'})
    const aliExpress = await Provider.find({name: 'Ali Express'})
    const homeDepot = await Provider.find({name: 'Home Depot'})


    const products = [
        {
            name: 'Ribeye',
            price: 26.99,
            category: 'Meat',
            description: 'Grass-Fed',
            quantity: '2 x 8oz',
            provider: thriveMarket[0]._id,
        },
        {
            name: 'Cashew',
            price: 11.99,
            category: 'Snack',
            description: 'Organic Raw Cashews',
            quantity: 'Each',
            provider: thriveMarket[0]._id,
        },
        {
            name: 'Watermelon',
            price: 4.39,
            category: 'Food',
            description: 'Seedless watermelon',
            quantity: 'Each',
            provider: instacart[0]._id,
        },
        {
            name: 'Garnete Stone Red Ring',
            price: '31.10',
            category: 'Jewelry',
            description: "925 Silver Men's Ring Red Garnet Stone Vintage Handmade Turkish Ring for Women Rock Jewelry Christmas Gift for Women Gemstone",
            quantity: 'Each',
            provider: aliExpress._id
        },
        {
            name: '20-Volt Cordless Compact Impact Driver',
            price: 99.00,
            category: 'Tools',
            description: "MANEUVER WITH EASE: Compact, under 4 in. design for optimized ergonomics and access to difficult-to-reach spots",
            quantity: 'Each',
            provider: homeDepot._id
        }
    ]

    await Product.insertMany(products)
    console.log(`Created ${products.length} products`)
}

const run = async () => {
    await main()
    db.close()
}

run()