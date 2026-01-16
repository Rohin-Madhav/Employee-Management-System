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
  department: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  status: {
    type:String,
    enum: ["active", "inactive"],
    default: "active",
  },
});

module.exports = mongoose.model("Employe", employeSchema);
