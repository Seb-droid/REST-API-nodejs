const sequelize = require("./connect.js");
 const User = require('./models/users.js');
 
module.exports = {
  sequelize: sequelize,
  models: {
    User,
  },
};