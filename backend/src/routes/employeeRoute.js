const router = require("express").Router();
const controller = require("../controller/employeeController");

router
  .get("/", controller.getAllEmployee)
  .get("/:id", controller.getEmployee)
  .post("/", controller.createEmployee)
  .put("/:id", controller.updateTodo)
  .delete("/:id", controller.deleteEmployee);

module.exports = router;
