const Posts = require("../models/posts.js");
const User = require("../models/users.js");
const createPosts = async (PostsModel) => {
  try {
    const posts = await Posts.create(PostsModel);
    console.log("OK createOne Posts: ", posts.toJSON());
    return posts;
  } catch (error) {
    console.log("ERROR in createOne " + "Posts:", error);
    return error;
  }
};
const deletePostsById = async (id) => {
  try {
    const result = await Posts.destroy({ where: { id } });
    if (result) {
      return { message: "Posts deleted with success" };
    } else {
      return { message: `Can't find Posts ${id} to delete`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};
const getPostsById = async (id) => {
  try {
    const result = await Posts.findOne({ where: { id } });
    if (result) {
      return result;
    } else {
      return { message: `Can't find Posts with id ${id}`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};
const getPostsByUserId = async (userId) => {
  try {
    const result = await Posts.findAll({
      where: { userId }
    });
    if (result) {
      return result;
    } else {
      return { message: `Can't find Posts with id ${userId}`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};
const getAllPosts = async (page) => {
  try {
    // Get Pagination Limit
    const limitPage = process.env.PAGINATION * 1;
    return await Posts.findAll({
      offset: page || 0,
      limit: limitPage,
      order: [["createdAt", "DESC"]]
    });
  } catch (error) {
    return error;
  }
};
const updatePostsById = async (id, PostsModel) => {
  try {
    const result = await Posts.update(PostsModel, { where: { id } });
    if (result[0] === 1) {
      return { message: "Posts updated with success" };
    } else {
      return { message: `Can't find Posts ${id} to update`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};
const factory = {
  createPosts,
  getPostsById,
  getAllPosts,
  deletePostsById,
  updatePostsById,
  getPostsByUserId
};
module.exports = factory;
