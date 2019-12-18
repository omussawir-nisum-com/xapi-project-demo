/**
 * There is default middleware for logger but this one is for example
 */
module.exports = function(req, res, next) {
  console.log(`path: ${req.url}`);
  next();
};
