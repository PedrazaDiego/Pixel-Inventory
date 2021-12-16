const db = require('../db')
const Provider = require('../models/provider')


db.on('error', console.error.bind(console, 'MongoDB conection error'))

const main = async () => {
    const providers = [
        {
            name: 'Thrive Market',
            details: 'An online, $5/month membership-based market that gives you access to the best healthy products, delivered at guaranteed savings.',
            url: 'https://thrivemarket.com/myaisle'
        },
        {
            name: 'instacart',
            details: "Order groceries for delivery or pickup today. Whatever you want from local stores, brought right to your door.",
            url: 'https://www.instacart.com/'
        },
        {
            name: 'Ali Express',
            details: 'One of the biggest online marketplaces in the world. There are hundreds of clothing manufacturers here.',
            url: 'https://www.aliexpress.com/',
        },
        {
            name: 'Home Depo',
            details: 'the largest home improvement retailer in the United States, supplying tools, construction products, and services',
            url: 'https://www.homedepot.com/'
        }
    ]

    await Provider.insertMany(providers)
    console.log('Created providers')
}
const run = async () => {
    await main()
    db.close()
}

run()