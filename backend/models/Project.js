const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
	name: { type: String, required: true },
	managers: [String],
	workers: [String],
	tasks: [String],
	isFinished: { type: Boolean, default: false }
});

module.exports = mongoose.model("Project", userSchema);
