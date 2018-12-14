// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const stat = {
  all(cb) {
    orm.all("stat", res => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create(cols, vals, cb) {
    orm.create("stat", cols, vals, res => {
      cb(res);
    });
  },
  update(objColVals, condition, cb) {
    orm.update("stat", objColVals, condition, res => {
      cb(res);
    });
  },
  delete(condition, cb) {
    orm.delete("stat", condition, res => {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = stat;
