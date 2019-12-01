const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const Task = require("../models/task");

router.get("/:id", (req, res) => {
	const taskId = req.params.id;

	if (!ObjectId.isValid(taskId)) {
		console.log("Invalid id");
		res.status(404).send();
		return;
	}

	Task.findById(taskId)
		.then((task) => {
			// No such task
			if (!task) {
				console.log("No such task");
				res.status(404).send();
			} else {
				res.send(task);
			}
		})
		.catch((err) => {
			res.status(500).send();
		});
});
module.exports = router;
