const express = require('express');
const router = express.Router();
const taskController = require('./task.controller');

router.post('/', taskController.createTask);
router.get('/',taskController.getTasks);
router.get('/by-user/:userId',taskController.getTasksByUserId);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;