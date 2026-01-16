const router = require("express").Router();
const EmployeController = require("../controllers/employeController");

router.post("/", EmployeController.createEmploye);
router.get("/active",EmployeController.getActiveEmployes);
router.get("/:id",EmployeController.getEmployeById)
router.put("/:id",EmployeController.updateEmploye)
router.delete("/:id",EmployeController.deleteEmploye)

module.exports = router;
