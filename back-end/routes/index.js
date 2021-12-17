const { Router } = require('express')
const controller = require('./controllers')

const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.get('/inventory', controller.getInventory)
router.get('/providers', controller.getProviders)
router.post('/addinventory', controller.postInventory)
router.post('/addprovider', controller.postProvider)

module.exports = router