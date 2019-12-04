const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
const { User } = require("../models/user");

router.get("/admin/users", (req, res) => {
	console.log("getting all users")
	if(req.session.user){
		res.send(req.session.user);
	}else{
		res.status(401).send();
	}
});

router.delete("/admin/:user_id", (req, res) => {
	const user_id = req.params.user_id;
	if(req.session.user){
		res.send(req.session.user);
	}else{
		res.status(401).send();
	}
});

module.exports = router;
