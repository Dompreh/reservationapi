import User from "../models/User.js";

export const createUser = async (req, res, next) => {
  const newUser = new User(req.body);
  try {
    const saveUser = await newUser.save();
    res.status(200).json(saveUser);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted successfully");
  } catch (error) {
    next(error);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
export const getAllUsers = async (req, res, next) => {
  //how to customise the error for one route with the middleware in index.js in touch

  // const failed = true
  // if(failed) return next(createrror(404, 'You are not authenticated!'))

  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    //how to use the middleware in index.js to catch errors
    next(error);
  }
};
