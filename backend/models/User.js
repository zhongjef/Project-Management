const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
	uid: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId(), unique: true },
	name: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	description: String,
	teams: [String],
	projects: [String],
	tasks: [String]
});

module.exports = mongoose.model("User", userSchema);
