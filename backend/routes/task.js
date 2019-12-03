const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const { Task, validate } = require("../models/task");

//get task by id
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

router.put("/", (req, res) => {
	console.log("creating task!");
	let name = req.body.name || "1";
	let desc = req.body.description || "";
<<<<<<< HEAD
	let progress = 0;
	console.log();
	Task.create({ 
		name: name, 
		description: desc, 
		progress: progress})
=======
	let contributors = req.body.contributors || [];
	let isFinished = req.body.isFinished || false;
	let progress = req.body.progress || 0;
	Task.create({
		name: name,
		description: desc,
		contributors: contributors,
		isFinished: isFinished,
		progress: progress
	})
>>>>>>> 8107df2ee5c6305fb049ba7134ec2ce92832508a
		.then((proj) => {
			res.status(200).send("successful!");
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send("failed when trying to save the target!");
		});
});

router.patch("/updateProgress/:task_id", (req, res) => {
	let taskId = req.body.taskId;
	let progress = req.body.progress || 0;
	let team_id = req.body.team_id;
	let user_id = req.body.user_id;

	Task.findOneAndUpdate(
		{ _id: taskId },
		{
			$set: {
				progress: parseInt(progress)
			}
		}
	)
		.then((e) => {
			res.status(200).send("update progress successfully!");
		})
		.catch((e) => {
			res.status(500).send("update progress failed!");
		});
});

router.patch("/:task_id", (req, res) => {
	let taskId = req.params.task_id;
	let contributor = req.body.contributor || "";
<<<<<<< HEAD
	Task.findOneAndUpdate({ _id: taskId }, { $push: { contributors: contributor}})
	.then((e)=> {
		res.status(200).send("successfully update the contributor!");
	})
	.catch((e)=> {
		res.status(500).send("fail to add contributor!");
	});

=======
	Task.findOneAndUpdate({ _id: taskId }, { $push: { contributors: contributor } })
		.then((e) => {
			res.status(200).send("successfully update the contributor!");
		})
		.catch((e) => {
			res.status(500).send("fail to add contributor!");
		});
>>>>>>> 8107df2ee5c6305fb049ba7134ec2ce92832508a
});

module.exports = router;
