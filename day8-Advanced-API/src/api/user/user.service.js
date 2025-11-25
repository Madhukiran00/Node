const User = require("../../models/user.model");
const mongoose = require("mongoose");

async function getUsers(queryParams) {
  const baseQuery = User.find();
  const features = new APIFeatures(baseQuery, queryParams)
    .filter()
    .search("name")
    .sort()
    .select()
    .paginate()
    .lean();
    
  const docs = await features.query;
  return { data: docs, meta: features.meta };
}

async function getUserById(id) {
  if (!mongoose.isValidObjectId(id)) throw new AppError("Invalid id", 400);
  const user = await User.findById(id).select("-password").lean();
  if (!user) throw new AppError("User not found", 404);
  return user;
}

async function createUser(payload) {
  const user = await User.create(payload);
  return user.toObject();
}

async function updateUser(id, payload) {
  const user = await User.findOneAndUpdate({ _id: id }, payload, {
    new: true,
    runValidators: true,
  }).select("-password").lean();
  if (!user) throw new AppError("User not found", 404);
  return user;
}

async function softDeleteUser(id) {
  const user = await User.findByIdAndUpdate(id, { isActive: false }, { new: true }).lean();
  if (!user) throw new AppError("User not found", 404);
  return user;
}

/* aggregations */
async function countUsers() {
  const [res] = await User.aggregate([{ $match: {} }, { $count: "totalUsers" }]);
  return (res && res.totalUsers) || 0;
}

async function countActiveInactive() {
  const res = await User.aggregate([
    { $group: { _id: "$isActive", count: { $sum: 1 } } },
  ]);

  const out = { active: 0, inactive: 0 };
  res.forEach((r) => {
    if (r._id === true) out.active = r.count;
    else out.inactive = r.count;
  });
  return out;
}

module.exports = {getUsers,getUserById,createUser,updateUser,softDeleteUser,countUsers,countActiveInactive,};
