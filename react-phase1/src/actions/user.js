import axios from "axios";

const DEVELOPMENT = true;
const COMMON_END_POINT = DEVELOPMENT ? "" : "http://66.212.174.180:5000";

export const signUp = async (data)=> {
    console.log(data)
    let url = `${COMMON_END_POINT}/auth/signup`;
    let r = await axios({
        method: 'post',
        url: url,
        data: data,
        headers: {
            'content-type': 'application/json'
        },
        withCredentials: true
    })
    console.log("returned url is: ...");
    console.log(r);
    window.location.href = r.data;
    return r;
};

export const login = async (data) => {
    let url = `${COMMON_END_POINT}/auth/login`;
    let r = await axios({
        method: 'post',
        url: url,
        data: data,
        headers: {
            'content-type': 'application/json'
        },
        withCredentials: true
    });
    localStorage.setItem('userId', r.data._id)
    return r;
};

export const logout = async () => {
    let url = `${COMMON_END_POINT}/auth/logout`;
    let r = await axios({
        method: 'get',
        url: url,
        headers: {
            'content-type': 'application/json'
        },
        withCredentials: true
    });
    localStorage.clear()
    return r;
};

export async function getUserInfo(user_id) {
    let url = `${COMMON_END_POINT}/api/user/${user_id}`;
    let r = await axios({
        method: 'get',
        url: url,
        headers: {
            'content-type': 'application/json'
        },
        withCredentials: true
    });
    return r;
};

export async function getCurrentUser(){
    // let url = `${COMMON_END_POINT}/auth/users/check-session`;
    // let r = await axios({
    //     method: 'get',
    //     url: url,
    //     headers: {
    //         'content-type': 'application/json'
    //     }
    // });
    // return r;
    return localStorage.getItem('userId');
};

export default {
    signUp,
    login,
    logout,
    getUserInfo
}