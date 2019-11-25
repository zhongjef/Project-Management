const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    uid: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId() },
    name: String,
    email: String,
    password: String,
    description: String,
    teams: [String],
    projects: [String],
    tasks: [String]
});

module.exports = mongoose.model("User", userSchema);