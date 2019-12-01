const express = require("express");
const router = express.Router();
const userServices = require("../service/user");
const ObjectId = require("mongoose").Types.ObjectId;
router.get("/:id", (req, res) => {
	const userId = req.params.id;
	// If invalid user id
	if (!ObjectId.isValid(userId)) {
		console.log("Invalid Id", userId);
		res.status(404).send();
		return;
	}

	// How come this part still executes
	userServices
		.findById(userId)
		.then((user) => {
			// No such user
			if (!user) {
				console.log("No such user");
				res.status(404).send();
			} else {
				res.send(user);
			}
		})
		.catch((err) => {
			res.status(500).send();
		});
});

module.exports = router;
