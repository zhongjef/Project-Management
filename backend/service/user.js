const User = require("../models/User.js");

async function findUserByEmail(email) {
	const res = await User.findOne({ eamil: email });
	return res;
}

/**
 * @param  id      MongoDB ObjectId.
 */
async function findUserById(id) {
	const res = await User.findById(id);
	return res;
}

async function createUser(user) {
	const newUser = new User(user);
	const res = await newUser.save();
	return res;
}

async function deleteUser(user) {
	const res = await User.findByIdAndDelete(user._id);
	return res;
}

/**
 * @param  id      MongoDB ObjectId.
 * @param  update  An object containing properties to update.
 */
async function updateUser(id, update) {
	const res = await User.findOneAndUpdate(id, update);
	return res;
}

module.exports = {
	findByEmail: findUserByEmail,
	findById: findUserById,
	create: createUser,
	delete: deleteUser,
	update: updateUser
};
