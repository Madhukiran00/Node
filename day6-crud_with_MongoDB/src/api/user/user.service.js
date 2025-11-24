const User = require('../../models/user.model');
const mongoose = require('mongoose');

// create user
exports.createUser = (data) => User.create(data);

// get all users
exports.getUsers = async (search = "", page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const query = {
    name: { $regex: search, $options: "i" } // search by name
  };

  const total = await User.countDocuments(query);

  const users = await User.find(query)
    .skip(skip)
    .limit(limit);

  return { total, users };
};

exports.getUserById = (id) => {
    if (!mongoose.isValidObjectId(id)) return null;
    return User.findById(id);
};

exports.updateUser = (id, updates) => {
    if (!mongoose.isValidObjectId(id)) return null;
    return User.findByIdAndUpdate(id, updates, { new: true });
};

exports.deleteUser = (id) => {
    if (!mongoose.isValidObjectId(id)) return null;
    return User.findByIdAndDelete(id);
};
