import axios from 'axios';

const ROLE_API_BASE_URL = "http://localhost:8080/admin/roles";
let token = localStorage.getItem("token")
let Authorization = `Bearer ${token}`


const getRoles = () => {
    var config = {
        method: 'get',
        url: ROLE_API_BASE_URL,
        headers: {
            'Authorization': Authorization,
        }
    };
    return axios(config);
}

export default { getRoles}