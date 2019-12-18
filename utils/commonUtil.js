var _ = require("lodash");

/**
 * Example for request and response body mutation will integrate with code later
 */
var convertEmployeeObj = () => {
  var object = {
    name: "osama",
    address: {
      street: "sadasd"
    }
  };

  var newpath = "address.st";
  var oldpath = "address.street";

  var obj = _.setWith(object, newpath, _.get(object, oldpath), () => {
    _.unset(object, oldpath);
  });

  console.log(object);
};
