import axios from "axios";

const signUp = async (name, password, email, baseUrl="http://localhost:8080")=> {
    let url = baseUrl + "/signup";
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

const login = async (name, password, email, baseUrl = "http://localhost:8080") => {
    let url = baseUrl + "/login";
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

const logout = async (baseUrl = "http://localhost:8080") => {
    let url = baseUrl + "/logout";
    let r = await axios({
        method: 'get',
        url: url,
        headers: {
            'content-type': 'application/json'
        }
    });
    return r;
};

const getUserInfo = async (user_id, baseUrl = "http://localhost:8080") => {
    let url = baseUrl + "/user/" + user_id;
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