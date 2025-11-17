import express from "express";
import TaskController from "./task.controller.js";

const router = express.Router();

router.get("/", TaskController.getTasks);
router.post("/", TaskController.createTask);

export default router;
