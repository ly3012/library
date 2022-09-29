import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8080/admin/users";
let token = localStorage.getItem("token")
let Authorization = `Bearer ${token}`


const getUser = async () => {
    var config = {
        method: 'get',
        url: ADMIN_API_BASE_URL,
        headers: {
            'Authorization': Authorization,
        }
    };
    const response = await axios(config);
    return response
}

const createUser = async (user) => {
    var config = {
        method: 'post',
        url: 'http://localhost:8080/api/auth/createUser',
        headers: {
            'Authorization': Authorization,
            'Content-Type': 'application/json'
        },
        data: user
    };
    const response = await axios(config);
    return response
}

const getUserById = async (userID) => {
    var config = {
        method: 'get',
        url: `${ADMIN_API_BASE_URL}/${userID}`,
        headers: {
            'Authorization': Authorization,
        }
    };
    const response = await axios(config);
    return response
}

const updateUser = async (user) => {
    var config = {
        method: 'put',
        url: ADMIN_API_BASE_URL,
        headers: {
            'Authorization': Authorization,
            'Content-Type': 'application/json'
        },
        data: user
    };
    const response = await axios(config);
    return response
}

const deleteUser = async (userID) => {
    var config = {
        method: 'delete',
        url: `${ADMIN_API_BASE_URL}/${userID}`,
        headers: {
            'Authorization': Authorization,
        }
    };
    const response = await axios(config);
    return response
}

const findUserByCriteria = async (criteria) => {
    var config = {
        method: 'get',
        url: `${ADMIN_API_BASE_URL}/search?query=${criteria}`,
        headers: {
            'Authorization': Authorization,
        }
    };
    const response = await axios(config);
    return response
}

export default { getUser, getUserById, createUser, deleteUser, updateUser, findUserByCriteria }