const Profile = require("../../models/profile.model");
const mongoose = require("mongoose");

// Create profile
exports.create = async (data) => {
  return await Profile.create(data);
};

// Get all profiles
exports.getAll = async () => {
  return await Profile.find().sort({ createdAt: -1 });
};

// Get single
exports.getById = async (id) => {
  if (!mongoose.isValidObjectId(id)) return null;
  return await Profile.findById(id);
};

// Update
exports.update = async (id, data) => {
  if (!mongoose.isValidObjectId(id)) return null;
  return await Profile.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

// Delete
exports.remove = async (id) => {
  if (!mongoose.isValidObjectId(id)) return null;
  return await Profile.findByIdAndDelete(id);
};
