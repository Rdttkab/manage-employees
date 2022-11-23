const Employee = require("../model/Employee");

exports.getAllEmployee = async (req, res) => {
  try {
    const employee = await Employee.find();

    if (employee.length === 0)
      return res
        .status(404)
        .json({ success: false, message: "No employee is found" });

    res.status(200).json({
      success: true,
      message: "All employee",
      employee: employee,
      count: employee.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.getEmployee = async (req, res) => {
  try {
    const id = { _id: req.params.id };
    const employee = await Employee.findOne(id);

    if (!employee)
      return res
        .status(404)
        .json({ success: false, message: "Employee is not found" });

    res
      .status(200)
      .json({ success: true, message: "Employee is found", employee });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const todo = await req.body;
    const created = await Employee.create(todo);

    if (!created)
      return res.status(400).json({
        success: false,
        message: "Employee creation failed",
      });

    res.status(200).json({
      success: true,
      message: "Employee created successfully",
      todo: created,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const id = { _id: req.params.id };
    const employee = await req.body;
    const update = await Employee.findOneAndUpdate(id, todo, { new: true });

    if (!update)
      return res.status(400).json({
        success: false,
        message: "Employee is not updated",
      });

    res.status(200).json({
      success: true,
      message: `Employee ${id._id} updated successfully`,
      employee: update,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const id = { _id: req.params.id };
    const deleted = await Employee.findByIdAndRemove(id);

    if (!deleted)
      return res.status(400).json({
        success: false,
        message: "Employee is not deleted",
      });

    res.status(200).json({
      success: true,
      message: `Employee ${id._id} deleted successfully`,
      employee: deleted,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
