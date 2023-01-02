const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Quote = require("./quote.js");
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

// RePost.associate = function (models) {
//   RePost.belongsToMany(models.posts, { foreignKey: "id", as: "postId",through: 'quoterepost' });
// };
// RePost.associate = function (models) {
//   RePost.belongsTo(models.users, { foreignKey: "id", as: "userId" });
// };

module.exports = RePost;
