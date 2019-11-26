const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
	taskid: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId(), unique: true },
	name: { type: String, required: true },
	description: [String],
	workers: [String],
	isFinished: { type: Boolean, default: false }
});

module.exports = mongoose.model("Task", taskSchema);
