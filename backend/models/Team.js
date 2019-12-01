const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
	name: { type: String, required: true },
	managers: [String],
	contributors: [String],
	pid: { type: String, required: true }
});

module.exports = mongoose.model("Team", teamSchema);
