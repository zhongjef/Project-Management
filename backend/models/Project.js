const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
	name: { type: String, required: true },
	managers: [String],
	teams: [String],
	isFinished: { type: Boolean, default: false }
});

module.exports = mongoose.model("Project", projectSchema);
