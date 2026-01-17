const router = require("express").Router();
const EmployeController = require("../controllers/employeController");

router.post("/create", EmployeController.createEmploye);
router.get("/active",EmployeController.getActiveEmployes);
router.get("/:id",EmployeController.getEmployeById)
router.put("/update/:id",EmployeController.updateEmploye)
router.delete("/delete/:id",EmployeController.deleteEmploye)

module.exports = router;
