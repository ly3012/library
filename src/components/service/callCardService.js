import axios from 'axios';

const CARD_API_BASE_URL = "http://localhost:8080/admin/callCards";
let token = localStorage.getItem("token")
let Authorization = `Bearer ${token}`


const getCallCard = () => {
    var config = {
        method: 'get',
        url: CARD_API_BASE_URL,
        headers: {
            'Authorization': Authorization,
        }
    };
    return axios(config);
}

const createCallCard = (callCard) => {
    var config = {
        method: 'post',
        url: CARD_API_BASE_URL,
        headers: {
            'Authorization': Authorization,
            'Content-Type': 'application/json'
        },
        data: callCard
    };
    return axios(config)
}

const getCallCardById = (callCardID) => {
    var config = {
        method: 'get',
        url: `${CARD_API_BASE_URL}/${callCardID}`,
        headers: {
            'Authorization': Authorization,
        }
    };
    return axios(config);
}

const updateCallCard = (callCard) => {
    var config = {
        method: 'put',
        url: CARD_API_BASE_URL,
        headers: {
            'Authorization': Authorization,
            'Content-Type': 'application/json'
        },
        data: callCard
    };
    return axios(config)
}

const deleteCallCard = (callCardID) => {
    var config = {
        method: 'delete',
        url: `${CARD_API_BASE_URL}/${callCardID}`,
        headers: {
            'Authorization': Authorization,
        }
    };
    return axios(config);
}

const findCallCardByCriteria = (criteria) => {
    var config = {
        method: 'get',
        url: `${CARD_API_BASE_URL}/search?query=${criteria}`,
        headers: {
            'Authorization': Authorization,
        }
    };
    return axios(config);
}

const setStatus = (callCardID) => {

    var config = {
        method: 'post',
        url: `http://localhost:8080/admin/callCards/return/${callCardID}`,
        headers: {
            'Authorization': Authorization
        }
    };

    return axios(config)

}

export default { getCallCard, getCallCardById, createCallCard, deleteCallCard, updateCallCard, findCallCardByCriteria, setStatus }