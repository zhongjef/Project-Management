const express = require("express");
const router = express.Router();
const projectServices = require("../service/project");
router.get("/:id", (req, res) => {
	const projectId = req.params.id;
	// Invalid project id
	if (!ObjectId.isValid(projectId)) {
		console.log("Invalid Id", projectId);
		res.status(404).send();
		return;
	}

	// How come this part still executes
	projectServices
		.findById(projectId)
		.then((project) => {
			// No such project
			if (!project) {
				console.log("No such project");
				res.status(404).send();
			} else {
				res.send(project);
			}
		})
		.catch((err) => {
			res.status(500).send();
		});
});
module.exports = router;
