const User = require('../models/User');

// Get all users with courses relation
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find().populate('courses');
        res.json(users);
    } catch (error) {
        next(error);
    }
};

// Create user
exports.createUser = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

// Update user
exports.updateUser = async (req, res, next) => {
    try {
        const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        next(error);
    }
};

// Delete user
exports.deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User deleted" });
    } catch (error) {
        next(error);
    }
};