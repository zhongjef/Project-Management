const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const { User, validate } = require("../models/user.js");
const _ = require("lodash");

router.get("/:id", (req, res) => {
	const userId = req.params.id;
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
				return res.send(user);
			}
		})
		.catch((err) => res.status(500).send());
});

router.post("/signup", async (req, res) => {
	const { error } = validate(res.body);
	if (error) return res.status(400).send(error.details[0].message);

	let user = await User.findOne({ email: req.body.email });
	if (user) return res.status(400).send("User already registered");

	const { name, email, password } = req.body;
	user = new User({ name: name, email: email, password: password });
	await user.save();
});

module.exports = router;
