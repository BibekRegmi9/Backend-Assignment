const express = require('express');

const UserController = require('../controllers/user-controller');
const  UserValidation  = require('../middlewares/user-valiation');

const router = express.Router();

router.post('/user', UserValidation.validateUserRequest, UserController.create);
router.delete('/user/:id', UserController.destroy);
router.get('/user/:id', UserController.get);
router.patch('/user/:id', UserController.update);

module.exports = router;