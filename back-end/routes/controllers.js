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

const getById = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        const provider = await Provider.findById(id)
        if(product) {
            return res.status(200).json({ product })
        } else if(provider) {
            return res.status(200).json({ provider })
        }
        return res.status(404).send('This does not exists')
    } catch(error){
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
        const provider = await Provider.create(req.body)
        console.log(req.body)
        console.log(provider)
        await provider.save()
        return res.status(201).json({ provider })
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
}




module.exports = {
    getInventory,
    getProviders,
    getById,
    postInventory,
    postProvider,
}