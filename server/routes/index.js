const { Router } = require('express')
const Users = require('./User')
const Products = require('./Products')

const router = Router()

router.use('/user', Users)
router.use('/products', Products)

module.exports = router
  