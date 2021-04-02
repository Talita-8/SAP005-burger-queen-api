const { Router } = require('express')
const Users = require('./User')
const Products = require('./Products')
const Orders = require('./Orders')

const router = Router()

router.use('/user', Users)
router.use('/products', Products)
router.use('/orders', Orders)

module.exports = router
  