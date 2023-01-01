const User = require("../models/users.js");
const Post = require("../models/posts.js");
const RePost = require("../models/rePost.js");
const luxon = require("luxon");
const { Op } = require("sequelize");

const createUser = async (userModel) => {
  try {
    const user = await User.create(userModel);
    console.log("OK createOne USER: ", user.toJSON());
    return user;
  } catch (error) {
    console.log("ERROR in createOne " + "USER:", error);
    return error;
  }
};
const deleteUserById = async (id) => {
  try {
    const result = await User.destroy({ where: { id } });
    if (result) {
      return { message: "User deleted with success" };
    } else {
      return { message: `Can't find user ${id} to delete`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};
const getUserById = async (id) => {
  try {
    const result = await User.findByPk(id);
    if (result) {
      return result;
    } else {
      return { message: `Can't find user with id ${id}`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};
const getUserByIdAndUsersPosts = async (id) => {
  const endDate = luxon.DateTime.now();
  const startDate = luxon.DateTime.local().minus({ days: 7 });
  // Valid dateTime to filter "2018-07-08T14:06:48.000Z", "2023-10-08T22:33:54.000Z"
  try {
    const result = await User.findOne({
      where: {
        [Op.and]: [
          { id },
          {
            createdAt: {
              [Op.between]: [startDate, endDate]
            }
          }
        ]
      },
      include: [
        {
          model: Post,
          include: {
            model: RePost
          }
        }
      ],
      order: [
        // sort by High model, in descending order first.
        [Post, "createdAt", "DESC"],
        // then sort by the nested model.
        [Post, RePost, "createdAt", "DESC"]
      ]
    });
    if (result) {
      return result;
    } else {
      return { message: `Can't find user with id ${id}`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};
const getAllUsers = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    return error;
  }
};
const updateUserById = async (id, userModel) => {
  try {
    const result = await User.update(userModel, { where: { id } });
    if (result[0] === 1) {
      return { message: "User updated with success" };
    } else {
      return { message: `Can't find user ${id} to update`, status: 404 };
    }
  } catch (error) {
    return error;
  }
};
const factory = {
  createUser,
  getUserById,
  getAllUsers,
  deleteUserById,
  updateUserById,
  getUserByIdAndUsersPosts
};
module.exports = factory;
