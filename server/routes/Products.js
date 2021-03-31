const Controller = require('../controller/ProductsController')
const { Router } = require('express')

const router = Router()

router.post("/", Controller.productsMethods.createProducts)
router.get("/", Controller.productsMethods.allProducts)
router.get("/:id", Controller.productsMethods.productId)
router.put("/:id", Controller.productsMethods.productUpdate)
router.delete("/:id", Controller.productsMethods.productDelete)

module.exports = router  