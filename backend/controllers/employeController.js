const Employe = require("../models/employeSchema");

exports.createEmploye = async (req, res) => {
  const { name, email, department, salary, status } = req.body;
  try {
    const newEmploye = new Employe({
      name: name,
      email: email,
      department: department,
      salary: salary,
      status: status,
    });
    const savedEmploye = await newEmploye.save();
    res.status(201).json({
      message: "Employe created✅",
      employe: savedEmploye,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "An employee with this email address already exists.",
      });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.getActiveEmployes = async (req, res) => {
  try {
    const employees = await Employe.find({ status: "active" });
    res.status(200).json({
      message: "Active employes",
      count: employees.length,
      employes: employees,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEmployeById = async (req, res) => {
  const { id } = req.params;
  try {
    const employeById = await Employe.findById(id);
    if (!employeById) {
      res.status(404).json({
        message: "employe Not Found",
      });
    }
    res.status(200).json({
      message: "Employee retrieved successfully",
      employee: employeById,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEmploye = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedEmploye = await Employe.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    if (!updatedEmploye) {
      res.status(404).json({
        message: "Employe Not Found",
      });
    }
    res.status(200).json({
      message: "Employe details updated",
      employe: updatedEmploye,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "An employee with this email address already exists.",
      });
    }
    res.status(500).json({ message: error.message });
  }
};

exports.deleteEmploye = async (req, res) => {
  const { id } = req.params;
  try {
    const softDelEmploye = await Employe.findByIdAndUpdate(
      id,
      {
        status: "inactive",
      },
      { new: true }
    );
    if (!softDelEmploye) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({
      message: "Employe soft deletd",
      employe: softDelEmploye,
    });
  } catch (error) {
    res.status(500), json({ message: error.message });
  }
};
