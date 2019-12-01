const user = require("../routes/user");
const project = require("../routes/project");
const bodyParser = require("body-parser");

module.exports = function(app) {
	// Express middleware
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Methods", "*");
		res.header("Access-Control-Allow-Headers", "*");
		res.header("content-type", "application/json");
		next();
	});
	// Routing
	app.use("/user", user);
	app.use("/project", project);
};
