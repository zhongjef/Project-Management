const NPM_REQUIREMENT = "NPM_RUN_ENV"; /*The variable mark that marks the npm run app*/
const NPM_RUN_REQUIREMENT_ERROR_CODE = 10; /*The error code to throw for the env running*/
const NPM_RUN_MSG = `
error code: ${NPM_RUN_REQUIREMENT_ERROR_CODE}, please run with npm script operations,
e.g: npm run app to launch this app
`;
const process = require("process");
const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const router = express();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("content-type", "application/json");
	next();
});
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const userService = require("./service/user.js");
const projectService = require("./service/project.js");
/*checker of complexity 4
if func is a registration function, it'll forward
*/
const npm_checker = (is_npm, func, mounted) =>
	!!func() | (is_npm || mounted) ? true : process.exit(NPM_RUN_REQUIREMENT_ERROR_CODE);
const app = {
	main: () => {
		/*where the logic lies, write code here*/
		console.log("starting the server...");
		router.use(bodyParser.urlencoded({ extended: false }));
		router.use(bodyParser.json());
		router.listen(8080);
		mongoose.set("useNewUrlParser", true);
		mongoose.set("useUnifiedTopology", true);
		mongoose.set("useCreateIndex", true);
		mongoose.set("useFindAndModify", false);
		mongoose
			.connect("mongodb+srv://jeff:SAes9P2BVWrf1oTW@cluster0-ai9jj.mongodb.net/csc309")
			.then(() => console.log("Connected to MongoDB..."))
			.catch((err) => console.log("Could not connect to MongoDB", err));

		// userService.create({ name: 'Jeff', email: 'jeff@mail.com', password: '123456' })
		const newUser = userService.findByEmail("jeff@mail.com");
		newUser.then((value) => {
			console.log(value);
		});
	}
};

router.get("/user/:id", (req, res) => {
	const userId = req.params.id;
	// Invalid user id
	if (!ObjectId.isValid(userId)) {
		console.log("Invalid Id", userId);
		res.status(404).send();
		return;
	}

	// How come this part still executes
	userService
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

router.get("/project/:id", (req, res) => {
	const projectId = req.params.id;
	// Invalid project id
	if (!ObjectId.isValid(projectId)) {
		console.log("Invalid Id", projectId);
		res.status(404).send();
		return;
	}

	// How come this part still executes
	projectService
		.findById(projectId)
		.then((project) => {
			// No such project
			if (!project) {
				console.log("No such project");
				res.status(404).send();
			} else {
				res.send(project);
			}
		})
		.catch((err) => {
			res.status(500).send();
		});
});

/*please ignore this, balance checking code*/
{
	require.main == module &&
		new Proxy(app, {
			forward: _.curry(npm_checker),
			mounted: false /*whether this app is mounted*/,
			get(target, key) {
				this.forward(this.run_by_npm())(
					() =>
						0 &
						process.on(
							"exit",
							(code) => (code == NPM_RUN_REQUIREMENT_ERROR_CODE ? console.error(NPM_RUN_MSG) : 1)
						)
				)(this.mounted);
				this.mounted = true;
				return target[key];
			},
			run_by_npm: () => process.argv.length > 3 && process.argv.filter((v) => v == NPM_REQUIREMENT).length > 0
		}).main();
}
