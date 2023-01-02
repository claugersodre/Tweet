const { DataTypes } = require("sequelize");
const db = require("../utils/database");

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
  }
});

Quote.associate = function (models) {
    Quote.belongsTo(models.posts, { foreignKey: "id", as: "postId" });
};
Quote.associate = function (models) {
    Quote.belongsTo(models.users, { foreignKey: "id", as: "userId" });
};

module.exports = Quote;
