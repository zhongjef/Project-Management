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
		teamList: [String],
	})
);

function validateProject(project) {
	const schema = Joi.object({
		name: Joi.string().min(1).max(80).required(),
		teams: Joi.array().items(Joi.objectId()),
		isFinished: Joi.boolean()
	});
	return schema.validate(project);
}
exports.Project = Project;
exports.validate = validateProject;
