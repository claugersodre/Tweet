const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const RePost = db.define("reposts", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  }
});


module.exports = RePost;
