const express = require("express");
const router = express.Router();
const controller = require("./user.controller");

router.get("/count", controller.countUsers);
router.get("/active-inactive", controller.activeInactive);
router.get("/", queryValidator, controller.getUsers);
router.post("/", controller.createUser);
router.get("/:id", controller.getUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;
