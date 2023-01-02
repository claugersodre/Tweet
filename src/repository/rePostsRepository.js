const RePosts = require("../models/rePost.js");
const createRePosts = async (RePostsModel) => {
  try {
    const rePost = await RePosts.create(RePostsModel);
    console.log("OK createOne RePosts: ", rePost.toJSON());
    return rePost;
  } catch (error) {
    console.log("ERROR in createOne " + "RePosts:", error);
    return error;
  }
};
const deleteRePostsById = async (id) => {
  try {
    const result = await RePosts.destroy({ where: { id } });
    if (result) {
      return { message: "RePosts deleted with success" };
    } else {
      return { message: `Can't find RePosts ${id} to delete`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};
const getRePostsById = async (id) => {
  try {
    const result = await RePosts.findOne({ where: { id } });
    if (result) {
      return result;
    } else {
      return { message: `Can't find RePosts with id ${id}`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};
const getRePostsByUserId = async (userId) => {
  try {
    const result = await RePosts.findAll({
      where: { userId }
    });
    if (result) {
      return result;
    } else {
      return { message: `Can't find RePosts with id ${userId}`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};
const getAllRePosts = async (page) => {
  try {
    // Get Pagination Limit
    const limitPage = process.env.PAGINATION * 1;
    return await RePosts.findAll({
      offset: page || 0,
      limit: limitPage,
      order: [["createdAt", "DESC"]]
    });
  } catch (error) {
    return error;
  }
};
const updateRePostsById = async (id, RePostsModel) => {
  try {
    const result = await RePosts.update(RePostsModel, { where: { id } });
    if (result[0] === 1) {
      return { message: "RePosts updated with success" };
    } else {
      return { message: `Can't find RePosts ${id} to update`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};
const factory = {
  createRePosts,
  getRePostsById,
  getAllRePosts,
  deleteRePostsById,
  updateRePostsById,
  getRePostsByUserId
};
module.exports = factory;
