const commonUtil = require('../utils/commonUtil');
const config = require('../constants/config');

module.exports = function(req, res, next) {
  var configMap = config[req.url];

  if (configMap) {
    commonUtil.convertEmployeeObj(req.body, configMap['request']);
  } else {
    // add flag for overriding
  }
  next();
};
