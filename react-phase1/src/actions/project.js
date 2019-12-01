
//(PUT)
const createProject = undefined;

//(PUT)
const createTeam = undefined;

//(PUT)
const createTask = undefined;

//get all your Project Status (GET)
const getProjectInfo = undefined;

//get all your task for a specific team (GET)
const getTeam = undefined;

//add member to a team, and Modify this member's databse info such that his contributorProject List contains this project (POST)
const addMember = undefined;

//update this task's worker Info, and update Team's contributors -> worker -> taskList, append (POST)
const addTaskContributor = undefined;

//update this task's worker Info, and update Team's contributors -> worker -> taskList, deletee (DELETEE)
const deleteTaskContributor = undefined;

//update this task's progress (PATCH)
const updateTaskProgress = undefined;

export default { createProject, 
                createTeam, 
                createTask, 
                getProjectInfo,
                getTeam,
                addMember,
                addTaskContributor,
                deleteTaskContributor,
                updateTaskProgress
               }