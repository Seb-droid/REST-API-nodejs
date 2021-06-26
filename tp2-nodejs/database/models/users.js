const { DataTypes } = require("sequelize");
const sequelize = require("../connect.js");
 
const User = sequelize.define("User", {
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "user",
    allowNull: false,
  },
  telephone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});
 
module.exports = User;