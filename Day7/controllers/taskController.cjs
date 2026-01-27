const Task = require("../models/Task.cjs");
// const task = require("../models/Task");

exports.createTask = async (req, res) => {
    const task = await Task.create({
        ...req.body,
        user: req.user.id
    });

    res.status(201).json({
        success: true,
        task
    });
};

exports.getTasks = async (req, res) => {
    const tasks = await Task.find({ user: req.user.id });

    res.json({
        success: true,
        tasks
    });
};

exports.updateTask = async (req, res) => {
    const task = await Task.findOneAndUpdate(
        { _id: req.params.id, user: req.user.id },
        req.body,
        { new: true }
    );

    if (!task) {
        return res.status(404).json({ message: "No such task found" });
    }

    res.json({
        success: true,
        task
    });
};

exports.deleteTask = async (req, res) => {
    const task = await Task.findOneAndDelete({
        _id: req.params.id,
        user: req.user.id
    });

if (!task) {
    return res.status(404).json({ message: "No such task found to delete" });
}

res.json({
    success: true,
    message: "Task deleted successfully"
});
};