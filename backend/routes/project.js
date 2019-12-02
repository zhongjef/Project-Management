const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const { Project, validate } = require("../models/project");
const {User, userValidator} = require("../models/user");

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

router.put("/:user_id", (req, res)=> {
	let userId = req.params.user_id;
	let teamList = req.body.teamList;
	let name = req.body.name;
	let proj_id = 0;
	Project.create({ name: name, teamList: teamList })
	.then((proj)=> {
		proj_id = proj._id;
		console.log(proj);
		return User.findById(userId);
	})
	.then((e)=> {
		console.log(e);
		e.manageProjects.push(proj_id);
		return e.save();
	}).
	then((e)=> {
		res.status(200).send("user saved successfully!");
	})
	.catch((err)=> {
		res.status(500).send("failed when trying to save the target!");
	});
	
});
module.exports = router;
