const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Post = require("./posts.js");
const RePost = require("./rePost.js");
const hash = require("../services/hashFunction.js");
const luxon = require("luxon");

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
  },
  joined: {
    type: DataTypes.VIRTUAL,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue("createdAt");
      return rawValue
        ? luxon.DateTime.utc(rawValue).toFormat("MMM dd, yyyy")
        : null;
    }
  }
});
User.hasMany(Post);
User.hasMany(RePost);
module.exports = User;
