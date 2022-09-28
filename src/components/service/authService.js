import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8080/api/auth/login";
let token = localStorage.getItem("token")
let Authorization = `Bearer ${token}`

const Login = (dataLogin) => {
    var axios = require('axios');
    var data = JSON.stringify({
        "username": dataLogin.username,
        "password": dataLogin.password
    });

    var config = {
        method: 'post',
        url: ADMIN_API_BASE_URL,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    return axios(config)
}

export default Login
