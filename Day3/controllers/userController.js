const User = require('../models/User');
const asyncWrapper = require('../asyncWrapper');

// @desc   Get all users
// @route  GET /api/users
const getUsers = asyncWrapper(async (req, res) => {
    const users = await User.find();
    res.json(users);
})

// @desc   create user
// @route  POST /api/users
const createUser = asyncWrapper(async (req, res) => {
    const {name, email} = req.body;

    if(!name || !email) {
        res.status(400);
        throw new Error("Name anse Email are required");
    }

    const user = new User({ name, email });
    res.status(201).json(user);
})

// @desc   Get user by id
// @route  GET /api/users/:id
const getUserById = asyncWrapper(async (req, res) => {
    const user = await User.findById(req.params.id);

    if(!user) {
        res.status(404);
        throw new Error('User not found');
    }

    res.json(user);
})

module.exports = {
    getUsers,
    createUser,
    getUserById,
};
