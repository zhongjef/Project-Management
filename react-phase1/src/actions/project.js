import axios from 'axios';
//(PUT)
const createProject = async (data, url = "http://localhost:8080/project") => {
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
const createTeam = async (data, url = "http://localhost:8080/team") => {
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
const createTask = async (data, url = "http://localhost:8080/task") => {
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
const getProjectInfo = async (project_id, baseUrl = "http://localhost:8080") => {
    let url = baseUrl + "/project/" + project_id;
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
const getTeam = async (team_id, baseUrl = "http://localhost:8080") => {
    let url = baseUrl + "/team/" + team_id;
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
const addMember = async (team_id, member_id, data, baseUrl = "http://localhost:8080") => {
    let url = baseUrl + "/team/" + team_id + "/" + member_id;
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
const addTaskContributor = async (task_id, data, baseUrl = "http://localhost:8080") => {
    let url = baseUrl + "/task/" + task_id;
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
const deleteTaskContributor = async (task_id, data, baseUrl = "http://localhost:8080") => {
    let url = baseUrl + "/task/" + task_id;
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
const updateTaskProgress = async (data, baseUrl = "http://localhost:8080") => {
    let url = baseUrl + "/task/updateProgress";
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