const express = require("express");
const authController = require("./auth.controller");
const { validate } = require("../../middlewares/validate.middleware");
const { registerSchema, loginSchema } = require("./auth.validation");
const checkToken = require("../../middlewares/checkToken");

const router = express.Router();

router.post("/register",authMiddleware, validate(registerSchema), (req, res) =>
  authController.register(req, res)
);

router.post("/login", validate(loginSchema), (req, res) =>
  authController.login(req, res)
);

module.exports = router;
