const User = require("../models/users");

const createUser = async (userModel) => {
  try {
    const user = await User.create(userModel);
    console.log("OK createOne USER: ", user);
    return user;
  } catch (error) {
    console.log("ERROR in createOne " + "USER:", error);
    return error;
  }
};
const deleteUser = async () => {};
const getUserById = async () => {};
const getAllUsers = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    return error;
  }
};
const updateUserById = async () => {};
const factory = {
  createUser,
  deleteUser,
  getUserById,
  getAllUsers,
  updateUserById
};
module.exports = factory;
