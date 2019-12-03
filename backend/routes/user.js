const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const { User, validate } = require("../models/user.js");
const { Project } = require("../models/project.js");
const _ = require("lodash");

router.get("/:id", (req, res) => {
	const userId = req.session.user;
	// If invalid user id
	if (!ObjectId.isValid(userId)) {
		console.log("Invalid Id", userId);
		return res.status(404).send();
	}

	User.findById(userId)
		.then((user) => {
			// No such user
			if (!user) {
				return res.status(404).send("No such user");
			} else {
				// return res.send(user);
				let userInfo = {
					name: user.name,
					description: user.description,
					manageProjects: [],
					contributeProjects: []
				};
				getProjectList(user.manageProjects)
					.then((lis) => {
						userInfo.manageProjects = lis;
						return userInfo;
					})
					.then(() => {
						return getProjectList(user.contributeProjects);
					})
					.then((lis) => {
						userInfo.contributeProjects = lis;
						res.send(userInfo);
					});
			}
		})
		.catch((err) => res.status(500).send());
});

async function getProjectList(lis) {
	result = [];
	for (let i = 0; i < lis.length; i++) {
		await Project.findById(lis[i]).then((project) => {
			if (!project) {
				console.log("A particular project not found");
			} else {
				result.push(project);
			}
		});
	}
	return result;
}

module.exports = router;
