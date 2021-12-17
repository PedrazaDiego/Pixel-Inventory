const { Product, Provider } = require('../models/index')

const getInventory = async (req, res) => {
    console.log(req.body)
    try {
        const inventory = await Product.find()
        return res.status(200).json({ inventory })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getInventory,
}