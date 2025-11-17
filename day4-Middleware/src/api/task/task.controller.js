import TaskService from "./task.service.js";

class TaskController {
  static getTasks(req, res, next) {
    try {
      const data = TaskService.getTasks();
      res.json({ success: true, data });
    } catch (error) {
      next(error);
    }
  }

  static createTask(req, res, next) {
    try {
      const task = TaskService.createTask(req.body);
      res.status(201).json({ success: true, task });
    } catch (error) {
      next(error);
    }
  }
}

export default TaskController;
