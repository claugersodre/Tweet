const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const RePost = require("./rePost.js");
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
    unique: false
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

Post.associate = function (models) {
  Post.belongsTo(models.users, { foreignKey: "id", as: "userId" });
};

Post.hasMany(RePost);
module.exports = Post;
