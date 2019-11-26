const Team = require("../models/Team.js");

/**
 * @param  id      MongoDB ObjectId.
 */
async function findTeam(id) {
	const res = await Team.findById(id);
	return res;
}

async function createTeam(team) {
	const newTeam = new Team(team);
	const res = await newTeam.save();
	return res;
}

async function deleteTeam(team) {
	const res = await Team.findByIdAndDelete(team._id);
	return res;
}

/**
 * @param  id      MongoDB ObjectId.
 * @param  update  An object containing properties to update.
 */
async function updateTeam(id, update) {
	const res = await Team.findOneAndUpdate(id, update);
	return res;
}

module.exports = {
	find: findTeam,
	create: createTeam,
	delete: deleteTeam,
	update: updateTeam
};
