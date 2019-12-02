const user = require("../routes/user");
const project = require("../routes/project");
const team = require("../routes/team");
const task = require("../routes/task");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

module.exports = function(app) {
	// Session management
	app.use(
		session({
			secret: "pepehands",
			store: new MongoStore({
				// Reuse mongoose connection
				mongooseConnection: mongoose.connection
			}),
			// If the session was never modified,
			// do not enforce saving back to the session store
			resave: false,
			// If the session is unitialized (new buf not modified),
			// do not enforce saving back to the session store
			saveUninitialized: false,
			// Session would hold for 15 minutes
			// Each time an user interacts with the server,
			// its session expiration date is refreshed.
			ttl: 15 * 60
		})
	);
	// Express middleware
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Methods", "*");
		res.header("Access-Control-Allow-Headers", "*");
		res.header("content-type", "application/json");
		next();
	});
	// Routing
	app.use("/api/user", user);
	app.use("/api/project", project);
	app.use("/api/team", team);
	app.use("/api/task", task);
};
