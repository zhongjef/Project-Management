const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
	name: { type: String, required: true },
	managers: [String],
	members: [String],
	projects: [String]
});

module.exports = mongoose.model("Team", teamSchema);
