//(PUT)
export const createProject;

//(PUT)
export const createTeam;

//(PUT)
export const createTask;

//get all your Project Status (GET)
export const getProjectInfo;

//get all your task for a specific team (GET)
export const getTeam;

//add member to a team, and Modify this member's databse info such that his contributorProject List contains this project (POST)
export const addMember;

//update this task's worker Info, and update Team's contributors -> worker -> taskList, append (POST)
export const addTaskContributor;

//update this task's worker Info, and update Team's contributors -> worker -> taskList, deletee (DELETEE)
export const deleteTaskContributor;

//update this task's progress (PATCH)
export const updateTaskProgress;

