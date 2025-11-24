const express = require("express");
const router = express.Router();
const profileController = require("./profile.controller");

// create Profile
router.post("/", profileController.createProfile);

// get  all profiles
router.get("/", profileController.getAllProfiles);

// get single profile
router.get("/:id", profileController.getProfileById);

// update profile
router.put("/:id", profileController.updateProfile);

// delete  profile
router.delete("/:id", profileController.deleteProfile);

module.exports = router;
