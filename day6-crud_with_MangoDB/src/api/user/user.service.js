const User = require('./user.model');
const mongoose = require('mongoose');

exports.createUser = (data) => User.create(data);

exports.getUsers = () => User.find();

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
