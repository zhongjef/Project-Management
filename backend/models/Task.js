const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    taskid: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId() },
    name: String,
    description: [String],
    workers: [String],
    isFinished: Boolean
});

module.exports = mongoose.model("Task", taskSchema);