const userService = require("./user.service");
const response = require("../../utility/response");

// get users
async function getUsers(req, res, next) {
  try {
    const result = await userService.getUsers(req.query);
    return response.success(res, "Uusers fetched", result.data, result.meta);
  } catch (err) {
    return next(err);
  }
}

// get user
async function getUser(req, res, next) {
  try {
    const user = await userService.getUserById(req.params.id);
    return response.success(res, "user fetched", user);
  } catch (err) {
    return next(err);
  }
}

// create user
async function createUser(req, res, next) {
  try {
    const created = await userService.createUser(req.body);
    return response.created(res, "User created", created);
  } catch (err) {
    return next(err);
  }
}

// update
async function updateUser(req, res, next) {
  try {
    const updated = await userService.updateUser(req.params.id, req.body);
    return response.success(res, "User updated", updated);
  } catch (err) {
    return next(err);
  }
}

// delete
async function deleteUser(req, res, next) {
  try {
    const user = await userService.softDeleteUser(req.params.id);
    return response.success(res, "user soft deleted", user);
  } catch (err) {
    return next(err);
  }
}

// get count
async function countUsers(req, res, next) {
  try {
    const total = await userService.countUsers();
    return response.success(res, "total users", { total });
  } catch (err) {
    return next(err);
  }
}

// chek active-inactive
async function activeInactive(req, res, next) {
  try {
    const counts = await userService.countActiveInactive();
    return response.success(res, "Active/Inactive counts", counts);
  } catch (err) {
    return next(err);
  }
}

module.exports = {getUsers,getUser,createUser,updateUser,deleteUser,countUsers,activeInactive,
};
