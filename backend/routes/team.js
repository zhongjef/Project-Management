const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const { Team, validate } = require("../models/team");
const {Project, p_valid} = require("../models/project");

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
router.put("/:project_id", (req, res) => {
	let project_id = req.params.project_id;
	let name = req.body.name;
	let managers = req.body.managers || [];
	let contributors = req.body.contributors || [];

	let proj_id = 0;
	console.log("creating team...");
	
	Team.create({ name: name, managers: managers, contributors: contributors })
		.then((proj) => {
			console.log("succeeded!");
			proj_id = proj._id;
			return Project.findById(project_id);
		})
		.then((proj)=> {
			proj.teamList.push(proj_id);
			return proj.save();
		})
		.then((r)=> {
			res.status(200).send(proj_id);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send("failed when trying to save the target!");
		});

});

router.post("/:team_id/:member_id", (req, res)=> {
	let teamId = req.params.team_id;
	let memberId = req.params.member_id;
	Team.findOneAndUpdate({ _id: teamId }, { $push: { contributors: memberId}})
	.then((e)=> {
		res.status(200).send("team updated successfully!");
	})
	.catch((e)=> {
		res.status(500).send("team update contributor failed!");
	});
});

router.patch("/:team_id/:user_id", async (req, res)=> {
	console.log("patching...")
	let teamId = req.params.team_id;
	let userId = req.params.user_id;
	let taskId = req.body.taskId;
	let userName = req.body.name || "1";
	try {
		let teamInstance = await Team.findById(teamId);
		let user = await Team.findOne({ _id: teamId, "contributors.userId": userId});
		if (!user) {
			teamInstance.contributors.push({
				userId: userId,
				userName: userName,
				taskList: [taskId]
			});
		}

		else {
			Team.findOneAndUpdate(
				{ _id: teamId, "contributors.userId": userId },
				{$push: {
					"contributors.taskList": taskId
				}}
			)
		}

		let r = await teamInstance.save();
		if (r) {
			res.status(200).send("update successful!");
		}
	}

	catch (e) {
		console.log(e);
		res.status(500).send("update failed!");
	}
	
})
module.exports = router;
