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
		.catch((err) => res.status(500).send());
});

router.put("/:task_id", (req, res) => {
	let taskId = req.params.task_id;
	let name = req.body.name || "";
	let desc = req.body.description || "";
	let contributors = req.body.contributors || []
	let isFinished = req.body.isFinished || false;
	let progress = req.body.progress || 0;
	Task.create({ name: name, 
		description: desc, 
		contributors: contributors,
		isFinished: isFinished,
		progress: progress})
		.then((proj) => {
			res.status(200).send("successful!");
		})
		.catch((err) => {
			res.status(500).send("failed when trying to save the target!");
		});

});

module.exports = router;
