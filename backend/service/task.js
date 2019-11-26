const Task = require("../models/Task.js");

/**
 * @param  id      MongoDB ObjectId.
 */
async function findTask(id) {
	const res = await Task.findById(id);
	return res;
}
async function createTask(task) {
	const newTask = new Task(task);
	const res = await newTask.save();
	return res;
}

async function deleteTask(task) {
	const res = await Task.findByIdAndDelete(task._id);
	return res;
}

/**
 * @param  id      MongoDB ObjectId.
 * @param  update  An object containing properties to update.
 */
async function updateTask(id, update) {
	const res = await Task.findOneAndUpdate(id, update);
	return res;
}

module.exports = {
	find: findTask,
	create: createTask,
	delete: deleteTask,
	update: updateTask
};
