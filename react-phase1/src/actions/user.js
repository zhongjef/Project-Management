import axios from "axios";

const DEVELOPMENT = true;
const COMMON_END_POINT = DEVELOPMENT ? "http://localhost:8080/api/" : "http://66.212.174.180:5000";

const signUp = async (name, password, email)=> {
    let url = `${COMMON_END_POINT}/signup`;
    let r = await axios({
        method: 'post',
        url: url,
        data: {
            name: name,
            password: password,
            email: email
        },
        headers: {
            'content-type': 'application/json'
        }
    });
    return r;
};

const login = async (name, password, email) => {
    let url = `${COMMON_END_POINT}/login`;
    let r = await axios({
        method: 'post',
        url: url,
        data: {
            name: name,
            password: password,
            email: email
        },
        headers: {
            'content-type': 'application/json'
        }
    });
    return r;
};

const logout = async () => {
    let url = `${COMMON_END_POINT}/logout`;
    let r = await axios({
        method: 'get',
        url: url,
        headers: {
            'content-type': 'application/json'
        }
    });
    return r;
};

const getUserInfo = async (user_id) => {
    let url = `${COMMON_END_POINT}/${user_id}`;
    let r = await axios({
        method: 'get',
        url: url,
        headers: {
            'content-type': 'application/json'
        }
    });
    return r;
};

export default {
    signUp,
    login,
    logout,
    getUserInfo
}