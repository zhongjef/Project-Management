const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    teamid: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId() },
    name: String,
    managers: [String],
    members: [String],
    projects: [String]
});

module.exports = mongoose.model("Team", teamSchema);