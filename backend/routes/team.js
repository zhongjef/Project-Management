const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const { Team, validate } = require("../models/team");

router.get("/:id", (req, res) => {
	const teamId = req.params.id;
	// If invalid user id
	if (!ObjectId.isValid(teamId)) {
		console.log("Invalid Id", teamId);
		return res.status(404).send();
	}

	Team.findById(teamId)
		.then((team) => {
			// No such team
			if (!team) {
				console.log("No such team");
				return res.status(404).send();
			} else {
				return res.send(team);
			}
		})
		.catch((err) => res.status(500).send());
});
router.put("/:team_id", (req, res) => {
	let teamId = req.params.team_id;
	let name = req.body.name;
	let managers = req.body.managers;
	let contributors = req.body.contributors;

	let proj_id = 0;
	Team.create({ name: name, managers: managers, contributors: contributors })
		.then((proj) => {
			res.status(200).send("successful!");
		})
		.catch((err) => {
			res.status(500).send("failed when trying to save the target!");
		});

});
module.exports = router;
