import axios from 'axios';

const DEVELOPMENT = true;
const COMMON_END_POINT = DEVELOPMENT ? "http://localhost:8080" : "http://66.212.174.180:5000";
//(PUT)
const createProject = async (data, url = `${COMMON_END_POINT}/project`) => {
    let r = await axios({
        method: 'put',
        url: url,
        data: data,
        headers: {
            'content-type': 'application/json'
        }
    });
    return r;
};
//(PUT)
const createTeam = async (data, url = `${COMMON_END_POINT}/team`) => {
    let r = await axios({
        method: 'put',
        url: url,
        data: data,
        headers: {
            'content-type': 'application/json'
        }
    });
    return r;
};

//(PUT)
const createTask = async (data, url = `${COMMON_END_POINT}/task`) => {
    let r = await axios({
        method: 'put',
        url: url,
        data: data,
        headers: {
            'content-type': 'application/json'
        }
    });
    return r;
};

//get all your Project Status (GET)
const getProjectInfo = async (project_id) => {
    let url =  `${COMMON_END_POINT}/project/${project_id}`;
    let r = await axios({
        method: 'get',
        url: url,
        headers: {
            'content-type': 'application/json'
        }
    });
    return r;
};
//get all your task for a specific team (GET)
const getTeam = async (team_id) => {
    let url =`${COMMON_END_POINT}/team/${team_id}`;
    let r = await axios({
        method: 'get',
        url: url,
        headers: {
            'content-type': 'application/json'
        }
    });
    return r;
};

//add member to a team, and Modify this member's databse info such that his contributorProject List contains this project (POST)
const addMember = async (team_id, member_id, data) => {
    let url = `${COMMON_END_POINT}/team/${team_id}/${member_id}`;
    let r = await axios({
        method: 'post',
        data: data,
        url: url,
        headers: {
            'content-type': 'application/json'
        }
    });
    return r;
};

//update this task's worker Info, and update Team's contributors -> worker -> taskList, append (POST)
const addTaskContributor = async (task_id, data) => {
    let url = `${COMMON_END_POINT}/task/${task_id}`;
    let r = await axios({
        method: 'patch',
        data: data,
        url: url,
        headers: {
            'content-type': 'application/json'
        }
    });
    return r;
};
//update this task's worker Info, and update Team's contributors -> worker -> taskList, deletee (DELETEE)
const deleteTaskContributor = async (task_id, data) => {
    let url = `${COMMON_END_POINT}/task/${task_id}`;
    let r = await axios({
        method: 'delete',
        data: data,
        url: url,
        headers: {
            'content-type': 'application/json'
        }
    });
    return r;
};
//update this task's progress (PATCH)
const updateTaskProgress = async (data) => {
    let url = `${COMMON_END_POINT}/task/updateProgress`;
    let r = await axios({
        method: 'patch',
        data: data,
        url: url,
        headers: {
            'content-type': 'application/json'
        }
    });
    return r;
};

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