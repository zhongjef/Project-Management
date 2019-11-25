const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    prjid: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId() },
    name: String,
    managers: [String],
    workers: [String],
    tasks: [String],
    isFinished: Boolean
});

module.exports = mongoose.model("Project", userSchema);