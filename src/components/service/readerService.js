import axios from 'axios';

const READER_API_BASE_URL = "http://localhost:8080/admin/readers";
let token = localStorage.getItem("token")
let Authorization = `Bearer ${token}`


const getReader = async () => {
    var config = {
        method: 'get',
        url: READER_API_BASE_URL,
        headers: {
            'Authorization': Authorization,
        }
    };
    const response = await axios(config);
    return response
}

const createReader = (reader) => {
    var config = {
        method: 'post',
        url: READER_API_BASE_URL,
        headers: {
            'Authorization': Authorization,
            'Content-Type': 'application/json'
        },
        data: reader
    };
    return axios(config)
}

const getReaderById = (readerID) => {
    var config = {
        method: 'get',
        url: `${READER_API_BASE_URL}/${readerID}`,
        headers: {
            'Authorization': Authorization,
        }
    };
    return axios(config);
}

const updateReader = (reader) => {
    var config = {
        method: 'put',
        url: READER_API_BASE_URL,
        headers: {
            'Authorization': Authorization,
            'Content-Type': 'application/json'
        },
        data: reader
    };
    return axios(config)
}

const deleteReader = (readerID) => {
    var config = {
        method: 'delete',
        url: `${READER_API_BASE_URL}/${readerID}`,
        headers: {
            'Authorization': Authorization,
        }
    };
    return axios(config);
}




const findByCriteria = async (criteria) => {
    var config = {
        method: 'get',
        url: `${READER_API_BASE_URL}/search?query=${criteria}`,
        headers: {
            'Authorization': Authorization,
        }
    };
    const response = await axios(config);
    return response
}



export default { getReader, getReaderById, createReader, deleteReader, updateReader, findByCriteria }