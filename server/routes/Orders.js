const Controller = require('../controller/OrdersController')
const { Router } = require('express')

const router = Router()

router.post("/:id", Controller.ordersMethods.createOrders)
router.get("/", Controller.ordersMethods.allOrders)
router.get("/:id", Controller.ordersMethods.orderId)
router.put("/:id", Controller.ordersMethods.orderUpdate)
router.delete("/:id", Controller.ordersMethods.orderDelete)

module.exports = router  