var _ = require("lodash");

/**
 * Example for request and response body mutation will integrate with code later
 */
var convertEmployeeObj = (object, config) => {
  for (var key in config) {
    _.setWith(object, config[key], _.get(object, key));
    _.unset(object, key);
  }
};

module.exports = { convertEmployeeObj };
