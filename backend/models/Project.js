const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);

const mongoose = require("mongoose");

const Project = mongoose.model(
	"Project",
	new mongoose.Schema({
		name: {
			type: String,
			required: true,
			minlength: 1,
			maxlength: 80
		},
		managers: [String],
		teams: [String],
		isFinished: { type: Boolean, default: false }
	})
);

function validateProject(project) {
	const schema = {
		name: Joi.string().min(1).max(80).required(),
		managers: Joi.array().items(Joi),
		teams: Joi.array().items(Joi.objectId()),
		isFinished: Joi.boolean()
	};
	return Joi.validate(project, schema);
}
exports.Project = Project;
exports.validate = validateProject;
