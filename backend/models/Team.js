const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);

const Team = mongoose.model(
	"Team",
	new mongoose.Schema({
		name: { type: String, required: true, minlength: 1, maxlength: 80 },
		managers: [String],
		contributors: [String],
		pid: { type: String, required: true }
	})
);

function validateTeam(team) {
	const schema = {
		name: Joi.string().min(1).max(80).required(),
		managers: Joi.array().items(Joi.objectId()),
		contributors: Joi.array().items(Joi.objectId()),
		pid: Joi.objectId()
	};
	return Joi.validate(team, schema);
}
exports.Team = Team;
exports.validate = validateTeam;
