const express = require("express");
const router = express.Router();
const employeeController = require("../controller/employeeController");

router.get("/employees", (req, res) => {
  employeeController.getEmployees(req, res);
});

router.get("/employee/:id", (req, res) => {
  employeeController.getEmployeesById(req, res);
});

router.post("/create", (req, res) => {
  employeeController.saveEmployee(req, res);
});

module.exports = router;
