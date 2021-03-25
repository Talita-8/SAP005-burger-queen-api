const { Router } = require('express')
const Controller = require('../controller/UserController')

const router = Router()

router.post("/", Controller.userMethods.createUser)
router.get("/", Controller.userMethods.allUsers)
router.get("/:id", Controller.userMethods.userId)
router.put("/:id", Controller.userMethods.userUpdate)
router.delete("/:id", Controller.userMethods.userDelete)

module.exports = router  