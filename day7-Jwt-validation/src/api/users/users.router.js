const router = require("express").Router();
const controller = require("./user.controller");
const checkToken = require("../../middlewares/checkToken");

router.get("/", checkToken, controller.getAllUsers);
router.get("/:id", checkToken, controller.getAllUser);
router.put("/:id", checkToken, controller.updateUser);
router.delete("/:id", checkToken, controller.deleteUser);

module.exports = router;