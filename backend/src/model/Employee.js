const { Schema, model } = require("mongoose");

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    dob: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    Salary: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Employee = model("Employee", employeeSchema);

module.exports = Employee;
