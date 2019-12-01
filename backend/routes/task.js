const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const { Task, validate } = require("../models/task");

router.get("/:id", (req, res) => {
	const taskId = req.params.id;

	if (!ObjectId.isValid(taskId)) {
		console.log("Invalid id");
		return res.status(404).send();
	}

	Task.findById(taskId)
		.then((task) => {
			// No such task
			if (!task) {
				console.log("No such task");
				return res.status(404).send();
			} else {
				return res.send(task);
			}
		})
		.catch((err) => {
			return res.status(500).send();
		});
});
module.exports = router;
