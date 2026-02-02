const router = require("express").Router();
const EmployeController = require("../controllers/employeController");
const auth = require("../middilwares/auth");

router.post("/create", auth, EmployeController.createEmploye);
router.get("/active", auth, EmployeController.getActiveEmployes);
router.get("/:id", auth, EmployeController.getEmployeById);
router.put("/update/:id", auth, EmployeController.updateEmploye);
router.delete("/delete/:id", auth, EmployeController.deleteEmploye);

module.exports = router;
