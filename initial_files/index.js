const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	uid: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId() },
	name: String,
	email: String,
	password: String,
	description: String,
	teams: [String],
	projects: [String],
	tasks: [String]
});

const teamSchema = new mongoose.Schema({
	teamid: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId() },
	name: String,
	managers: [String],
	members: [String],
	projects: [String]
});

const projectSchema = new mongoose.Schema({
	prjid: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId() },
	name: String,
	managers: [String],
	workers: [String],
	tasks: [String],
	isFinished: Boolean
});

const taskSchema = new mongoose.Schema({
	taskid: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId() },
	name: String,
	description: [String],
	workers: [String],
	isFinished: Boolean
});

const User = mongoose.model("User", userSchema);

async function createUser() {
	const someUser = new User({
		name: "孙笑川258",
		email: "sun@dog.com",
		password: "4396",
		description:
			"我是一个男性黑人出生于一个也门MSL家庭，后来我支持了LGBT选择变性嫁给一个男人育有一子。但战事动荡男人战死，我虽用rpg自卫但还是失去了双腿成了残疾人，后来孩子也去世了，有了心理障碍。为躲避战乱选择成为国际难民避难，并加入了环保协会，大自然保护协会，动物保护协会并成为了素食主义者",
		teams: ["someTeamid"],
		projects: ["projectid"],
		tasks: ["taskId"]
	});
	const result = await someUser.save();
	console.log(result);
}

module.exports = {
	createUser: createUser
}
