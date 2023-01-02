const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const RePost = require("./rePost.js");
const Quote = require("./quote.js");

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

Post.associate = function (models) {
  Post.belongsTo(models.users, { foreignKey: "id", as: "userId" });
};

Post.hasMany(RePost);
Post.hasMany(Quote);
module.exports = Post;
