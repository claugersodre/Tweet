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

RePost.associate = function (models) {
  RePost.belongsTo(models.posts, { foreignKey: "id", as: "postId" });
};
RePost.associate = function (models) {
  RePost.belongsTo(models.users, { foreignKey: "id", as: "userId" });
};

module.exports = RePost;
