const { Router } = require('express')
const Users = require("./User")

const router = Router()

router.use('/user', Users);

module.exports = router
  