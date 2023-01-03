const { DataTypes } = require("sequelize");
const luxon = require("luxon");
const db = require("../utils/database");
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
    isAlphanumeric: true,
    len: [1, 14],
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

module.exports = User;
