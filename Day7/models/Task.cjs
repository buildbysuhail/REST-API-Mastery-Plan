const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: String,
        completed: {
            type: Boolean,
            default: false
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",  // This is most important
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);