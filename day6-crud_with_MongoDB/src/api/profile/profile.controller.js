const profileService = require("./profile.service");

// CREATE
exports.createProfile = async (req, res, next) => {
  try {
    const data = await profileService.createProfile(req.body);
    res.status(201).json({
      success: true,
      message: "Profile created successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

// get all 
exports.getAllProfiles = async (req, res, next) => {
  try {
    const data = await profileService.getAllProfiles();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};

// get by id 
exports.getProfileById = async (req, res, next) => {
  try {
    const data = await profileService.getProfileById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Profile not found" });
    }
    res.status(200).json({ success: true, data });
  } catch (error) {
    next(error);
  }
};

// update 
exports.updateProfile = async (req, res, next) => {
  try {
    const data = await profileService.updateProfile(req.params.id, req.body);
    if (!data) {
      return res.status(404).json({ success: false, message: "Profile not found" });
    }
    res.status(200).json({ success: true, message: "Profile updated", data });
  } catch (error) {
    next(error);
  }
};

// delete
exports.deleteProfile = async (req, res, next) => {
  try {
    const data = await profileService.deleteProfile(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Profile not found" });
    }
    res.status(200).json({ success: true, message: "Profile deleted" });
  } catch (error) {
    next(error);
  }
};
