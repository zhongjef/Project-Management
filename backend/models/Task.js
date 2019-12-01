const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: [String],
	contributors: [String],
	isFinished: { type: Boolean, default: false },
	progress: { type: Number, default: 0, min: 0, max: 100 }
});

module.exports = mongoose.model("Task", taskSchema);
