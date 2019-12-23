const axios = require('axios');

var getEmployees = employeeUrl => {
  return axios.get(employeeUrl);
};

var getEmployeesById = employeeUrl => {
  return axios.get(employeeUrl);
};

var saveEmployee = (employeeURL, body) => {
  return axios.post(employeeURL, body);
};

module.exports = {getEmployees, getEmployeesById, saveEmployee};
