const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const { Team, validate } = require("../models/team");
const { Project, p_valid } = require("../models/project");
const { User } = require("../models/user");

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

router.put("/", (req, res) => {
	if (!req.body.name) {
		return res.status(400).send("Missing team name");
	}
	const { error } = validate(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}
	let project_id = req.body.pid;
	let name = req.body.name;
	let contributors = req.body.contributors || [];

	console.log("creating team... on project: " + project_id);
	let team_id = 0;
	Project.findById(project_id)
		.then((proj) => {
			if (!proj) {
				res.status(404);
			} else {
				console.log("found project");
				Team.create({ name: name, contributors: contributors, pid: project_id })
					.then((team) => {
						if (!team) {
							res.status(500);
						} else {
							team_id = team._id;
							return team;
						}
					})
					.then((team) => {
						console.log(team._id);
						proj.teamList.push(team._id);
						proj.save();
						res.send(proj);
					});
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send("failed when trying to save the target!");
		});
});

router.post("/:team_id/:member_id", (req, res) => {
	let teamId = req.params.team_id;
	let memberId = req.params.member_id;
	let TeamMemeber = {};
	User.findById(memberId)
		.then((user) => {
			TeamMemeber = {
				userId: memberId,
				userName: user.name,
				taskList: []
			};
		})
		.then(() => {
			return Team.findOneAndUpdate(teamId, { $push: { contributors: TeamMemeber } });
		})
		.then((e) => {
			// res.send(e)
			res.status(200).send("team updated successfully!");
		})
		.catch((e) => {
			res.status(500).send("team update contributor failed!");
		});
});

router.patch("/:team_id/:user_id", async (req, res) => {
	console.log("patching...");
	let teamId = req.params.team_id;
	let userId = req.params.user_id;
	let taskId = req.body.taskId;
	let userName = req.body.name || "1";
	try {
		let teamInstance = await Team.findById(teamId);
		let user = await Team.findOne({ _id: teamId, "contributors.userId": userId });
		if (!user) {
			teamInstance.contributors.push({
				userId: userId,
				userName: userName,
				taskList: [taskId]
			});
		} else {
			Team.findOneAndUpdate(
				{ _id: teamId, "contributors.userId": userId },
				{
					$push: {
						"contributors.taskList": taskId
					}
				}
			);
		}

		let r = await teamInstance.save();
		if (r) {
			res.status(200).send("update successful!");
		}
	} catch (e) {
		console.log(e);
		res.status(500).send("update failed!");
	}
});
module.exports = router;
