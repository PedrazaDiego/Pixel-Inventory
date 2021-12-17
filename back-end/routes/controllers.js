const { Product, Provider } = require('../models/index')

const getInventory = async (req, res) => {
    try {
        const inventory = await Product.find()
        return res.status(200).json({ inventory })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getProviders = async (req, res) => {
    try {
        const provider = await Provider.find()
        return res.status(200).json({ provider })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const postInventory = async (req, res) => {
    try {
        const item = await Product.create(req.body)
        await item.save()
        return res.status(201).json({ item })
    } catch (error){
        return res.status(500).json({ error: error.message })
    }
} 

const postProvider = async (req, res) => {
    try {
        const provider = await Provider.create(req, res)
        await provider.save()
        return res.status(201).json({ provider })
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}



module.exports = {
    getInventory,
    getProviders,
    postInventory,
    postProvider,
}