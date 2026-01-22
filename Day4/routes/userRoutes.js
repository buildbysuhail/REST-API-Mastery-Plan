const express = require('express');
const router = express.Router();

const { 
    createUser,
    updateUser,
} = require('../controllers/userController');

const {
    createUserValidator,
    updateUserValidator,
} = require('../validators/userValidator');

const validate = require('../middlewares/validate');

router.post(
    '/users',
    createUserValidator,
    validate,
    createUser
);

router.put(
    '/users/:id',
    updateUserValidator,
    validate,
    updateUser
);


module.exports = router;