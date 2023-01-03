const Post = require("./posts");
const User = require("./users");
const Quote = require("./quote");
const RePost = require("./rePost");

const association = () => {
  console.log(Post, User);

  // Post
  Post.associate = function (models) {
    Post.belongsTo(User, { foreignKey: "id", as: "userId" });
  };
  Post.hasMany(RePost);
  Post.hasMany(Quote);

  // Quote
  Quote.associate = function (models) {
    Quote.belongsTo(Post, {
      foreignKey: "id",
      as: "postId",
      allowNull: true
    });
  };

  Quote.associate = function (models) {
    Quote.belongsTo(RePost, {
      foreignKey: "id",
      as: "repostId",
      allowNull: true
    });
  };
  Quote.associate = function (models) {
    Quote.belongsTo(User, { foreignKey: "id", as: "userId" });
  };
  Quote.hasMany(RePost);

  // RePost
  RePost.associate = function (models) {
    RePost.belongsTo(Post, {
      foreignKey: "id",
      as: "postId",
      allowNull: true
    });
  };
  RePost.associate = function (models) {
    RePost.belongsTo(Quote, {
      foreignKey: "id",
      as: "quoteId",
      allowNull: true
    });
  };
  RePost.associate = function (models) {
    RePost.belongsTo(User, { foreignKey: "id", as: "userId" });
  };
  RePost.hasMany(Quote);

  // User
  User.hasMany(Post);
  User.hasMany(RePost);
  User.hasMany(Quote);
};
const factory = {
  association
};
module.exports = factory;
