const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const Team = require("../models/team");

router.get("/:id", (req, res) => {
	const teamId = req.params.id;
	// If invalid user id
	if (!ObjectId.isValid(teamId)) {
		console.log("Invalid Id", teamId);
		res.status(404).send();
		return;
	}

	Team.findById(teamId)
		.then((team) => {
			// No such team
			if (!team) {
				console.log("No such team");
				res.status(404).send();
			} else {
				res.send(team);
			}
		})
		.catch((err) => {
			res.status(500).send();
		});
});

module.exports = router;
