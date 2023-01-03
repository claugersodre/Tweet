const { DataTypes } = require("sequelize");
const db = require("../utils/database");


const Quote = db.define("quotes", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [1, 777],
    unique: false
  }
});


module.exports = Quote;
