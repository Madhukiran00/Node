const express = require("express");
const router = express.Router();
const controller = require("./profile.controller");

// Create
router.post("/", controller.createProfile);

// List
router.get("/", controller.getProfiles);

// Single
router.get("/:id", controller.getProfileById);

// Update
router.put("/:id", controller.updateProfile);

// Delete
router.delete("/:id", controller.deleteProfile);

module.exports = router;
