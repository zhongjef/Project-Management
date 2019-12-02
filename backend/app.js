const NPM_REQUIREMENT = "NPM_RUN_ENV"; /*The variable mark that marks the npm run app*/
const NPM_RUN_REQUIREMENT_ERROR_CODE = 10; /*The error code to throw for the env running*/
const NPM_RUN_MSG = `
error code: ${NPM_RUN_REQUIREMENT_ERROR_CODE}, please run with npm script operations,
e.g: npm run app to launch this app
`;
const process = require("process");
const _ = require("lodash");

// Set up routing
const port = process.env.PORT || 8080;
const express = require("express");
const app = express();
require("./startup/routes")(app);
require("./startup/db")();

const { User, validate } = require("./models/user.js");

/*checker of complexity 4
if func is a registration function, it'll forward
*/
const npm_checker = (is_npm, func, mounted) =>
	!!func() | (is_npm || mounted) ? true : process.exit(NPM_RUN_REQUIREMENT_ERROR_CODE);
const wheel = {
	main: () => {
		console.log("starting the server...");
		app.listen(port, () => {
			console.log(`Listening on port ${port}...`);
		});

		// userServices.create({ name: 'Jeff', email: 'jeff@mail.com', password: '123456' })
		const newUser = User.findOne({ email: "jeff@mail.com" });
		newUser
			.then((value) => {
				console.log(value);
			})
			.then(() => {
				return validate({
					description: "",
					name: "Jeff",
					email: "jeff@mail.com",
					password: "123456"
				});
			})
			.then((value) => {
				console.log("success on call to validat user", value);
			})
			.catch((err) => {
				console.log("error somewhere", err);
			});
	}
};

/*please ignore this, balance checking code*/
{
	require.main == module &&
		new Proxy(wheel, {
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
