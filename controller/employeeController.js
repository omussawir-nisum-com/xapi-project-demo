const employeeService = require("../service/employeeService");
const employeeBaseURL = require("../constants/constant");

var getEmployees = async (req, res) => {
  let employeeURL = getEmployeeUrl(req);

  try {
    const response = await employeeService.getEmployees(employeeURL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.send(response.error);
  }
};

var getEmployeesById = async (req, res) => {
  let employeeURL = getEmployeeUrl(req);

  try {
    const response = await employeeService.getEmployeesById(employeeURL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.send(response.error);
  }
};

var saveEmployee = async (req, res) => {
  let employeeURL = getEmployeeUrl(req);

  try {
    const response = await employeeService.saveEmployee(employeeURL, req.body);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.send(response.error);
  }
};

var getEmployeeUrl = req => {
  return `${employeeBaseURL}${req.originalUrl}`;
};

module.exports = { getEmployees, getEmployeesById, saveEmployee };
