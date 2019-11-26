const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
	prjid: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId(), unique: true },
	name: { type: String, required: true },
	managers: [String],
	workers: [String],
	tasks: [String],
	isFinished: { type: Boolean, default: false }
});

module.exports = mongoose.model("Project", userSchema);
