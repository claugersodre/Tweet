const { Sequelize, DataTypes } = require("sequelize");
const db = require("../utils/database");
const Post = require("./posts.js");
const hash = require("../services/hashFunction.js");
const User = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue("password", hash.hash(value));
    }
  }
});
User.hasMany(Post);
module.exports = User;
