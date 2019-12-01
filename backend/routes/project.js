const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const { Project, validate } = require("../models/project");
router.get("/:id", (req, res) => {
	const projectId = req.params.id;
	// Invalid project id
	if (!ObjectId.isValid(projectId)) {
		console.log("Invalid Id", projectId);
		return res.status(404).send();
	}

	Project.findById(projectId)
		.then((project) => {
			// No such project
			if (!project) {
				console.log("No such project");
				return res.status(404).send();
			} else {
				return res.send(project);
			}
		})
		.catch((err) => {
			return res.status(500).send();
		});
});
module.exports = router;
