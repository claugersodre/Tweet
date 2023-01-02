const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const RePost = require("./rePost");
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

// Quote.associate = function (models) {
//   Quote.belongsTo(models.posts, {
//     foreignKey: "id",
//     as: "postId",
//     allowNull: true
//   });
// };
// if (!db.models.reposts) {
//   db.models.reposts = RePost;
// }
// Quote.associate = function (models) {
//   Quote.belongsToMany(db.models.reposts, {
//     foreignKey: "id",
//     as: "repostId",
//     through: "quoterepost"
//   });
// };
// Quote.associate = function (models) {
//   Quote.belongsTo(models.users, { foreignKey: "id", as: "userId" });
// };

module.exports = Quote;
