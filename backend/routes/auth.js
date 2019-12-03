const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const { User, validate } = require("../models/user");

router.post("/signup", async (req, res) => {
	// const { error } = validate(res.body);
	// if (error) {
	// 	console.log(error);
	// 	return res.status(400).send(error.details[0].message);
	// }

	let user = await User.findOne({ email: req.body.email });
	if (user) return res.status(400).send("User already registered");

	const { name, email, password } = req.body;
	user = new User({ name: name, email: email, password: password });
	await user.save();
	res.send(user);
});

router.post("/login", async (req, res) => {
	// const { error } = validate(res.body);
	// if (error) {
	// 	console.log(error);
	// 	return res.redirect("/");
	// }
	const { name, email, password } = req.body;
	// First try login with email
	let user = await User.findOne({ email: email, password: password });
	// If login with email does not work, try with username
	if (!user) {
		user = await User.findOne({ name: name, password: password });
	}
	// If both email and username does not work, then invalid credential
	if (!user) return res.status(400).send("Invalid login credentials");
	req.session.user = user._id;
	res.send(user);
	// res.redirect("/");
});

module.exports = router;
