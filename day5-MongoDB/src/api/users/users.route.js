const express = require('express');
const router = express.Router();
const controller = require('./users.controller');

// create
router.post('/', controller.createUser);

// get list with 
router.get('/', controller.getUsers);

// get single
router.get('/:id', controller.getUserById);

// update
router.put('/:id', controller.updateUser);

// delete
router.delete('/:id', controller.deleteUser);

module.exports = router;
