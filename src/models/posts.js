const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Post = db.define("posts", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [1, 777],
    unique: false
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Post;
