//it contains all logic of userRoutes.js
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

//@desc Auth user and get token
//@route POST /api/users/login
//@access PUBLIC
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

//@desc Register user
//@route POST /api/users
//@access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

//@desc Logout user / clear cookie
//@route POST /api/users/logout
//@access PRIVATE
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

//@desc get user profile
//@route POST /api/users/profile
//@access PRIVATE
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

//@desc update user profile
//@route PUT /api/users/profile
//@access PRIVATE
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

//@desc Get users
//@route GET /api/users
//@access PRIVATE/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get Users");
});

//@desc Get user by ID
//@route GET /api/users/:id
//@access PRIVATE/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get User by id");
});

//@desc delete user
//@route DELETE /api/users/:id
//@access PRIVATE/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete User");
});

//@desc update user
//@route DELETE /api/users/:id
//@access PRIVATE/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update User");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
