/**
 * There is default middleware for logger but this one is for example
 */
module.exports = function(req, res, next) {
  console.log(`request path: ${req.url}`);

  res.on("finish", () => {
    console.info(`response: ${res.statusCode} ${res.statusMessage}`);
  });
  next();
};
