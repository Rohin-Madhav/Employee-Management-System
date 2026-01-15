const router = require("express").Router()



router.post("/",createEmploye)
router.get("/active",getActiveEmployes)
router.get("/:id",getEmplyeById)
router.put("/update",updateEmploye)
router.patch("/del",deleteEmploye)

module.exports = router