import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8080/admin/users";
let token = localStorage.getItem("token")
let Authorization = `Bearer ${token}`


const getUser = () => {
    var config = {
        method: 'get',
        url: ADMIN_API_BASE_URL,
        headers: {
            'Authorization': Authorization,
        }
    };
    return axios(config);
}

const createUser = (user) => {
    var config = {
        method: 'post',
        url: 'http://localhost:8080/api/auth/createUser',
        headers: {
            'Authorization': Authorization,
            'Content-Type': 'application/json'
        },
        data: user
    };
    return axios(config)
}

const getUserById = (userID) => {
    var config = {
        method: 'get',
        url: `${ADMIN_API_BASE_URL}/${userID}`,
        headers: {
            'Authorization': Authorization,
        }
    };
    return axios(config);
}

const updateUser = (user) => {
    var config = {
        method: 'put',
        url: ADMIN_API_BASE_URL,
        headers: {
            'Authorization': Authorization,
            'Content-Type': 'application/json'
        },
        data: user
    };
    return axios(config)
}

const deleteUser = (userID) => {
    var config = {
        method: 'delete',
        url: `${ADMIN_API_BASE_URL}/${userID}`,
        headers: {
            'Authorization': Authorization,
        }
    };
    return axios(config);
}

const findUserByCriteria = (criteria) => {
    var config = {
        method: 'get',
        url: `${ADMIN_API_BASE_URL}/search?query=${criteria}`,
        headers: {
            'Authorization': Authorization,
        }
    };
    return axios(config);
}

export default { getUser, getUserById, createUser, deleteUser, updateUser, findUserByCriteria }