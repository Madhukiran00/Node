
const Profile = require('../../models/profile.model');


exports.createProfile = async (req, res, next) => {
  try {
    const { bio, age, gender, address, userId } = req.body;

    const profile = await Profile.create({ bio, age, gender, address, userId });

    res.status(201).json({ success: true, data: profile });
  } catch (err) {
    next(err);
  }
};

// Get All Profiles
exports.getProfiles = async (req, res, next) => {
  try {
    const profiles = await Profile.find().sort({ createdAt: -1 });
    res.json({ success: true, data: profiles });
  } catch (err) {
    next(err);
  }
};

// Get Profile by ID
exports.getProfileById = async (req, res, next) => {
  try {
    const profile = await Profile.findById(req.params.id);

    if (!profile)
      return res.status(404).json({ success: false, message: "Profile not found" });

    res.json({ success: true, data: profile });
  } catch (err) {
    next(err);
  }
};

// Update Profile
exports.updateProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!profile)
      return res.status(404).json({ success: false, message: "Profile not found" });

    res.json({ success: true, data: profile });
  } catch (err) {
    next(err);
  }
};

// Delete Profile
exports.deleteProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);

    if (!profile)
      return res.status(404).json({ success: false, message: "Profile not found" });

    res.json({ success: true, message: "Profile deleted" });
  } catch (err) {
    next(err);
  }
};
