const mongoose = require("mongoose");

const employeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  Department: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  status: {
    enum: ["active", "inactive"],
    default: "active",
  },
});

module.exports = mongoose.model("Employe", employeSchema);
