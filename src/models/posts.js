const Sequelize = require("sequelize");
const db = require("../utils/database");
const Posts = db.define("posts", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  data: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

Posts.associate = function (models) {
  Posts.belongsTo(models.users, { foreignKey: "id", as: "userId" });
};

module.exports = Posts;
