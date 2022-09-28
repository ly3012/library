import axios from 'axios';

const BOOK_API_BASE_URL = "http://localhost:8080/admin/books";
let token = localStorage.getItem("token")
let Authorization = `Bearer ${token}`


const getBook = async () => {
    var config = {
        method: 'get',
        url: BOOK_API_BASE_URL,
        headers: {
            'Authorization': Authorization,
        }
    };
    const response = await axios(config);
    return response
}

const createBook = (book) => {
    var config = {
        method: 'post',
        url: BOOK_API_BASE_URL,
        headers: {
            'Authorization': Authorization,
            'Content-Type': 'application/json'
        },
        data: book
    };
    return axios(config)
}

const getBookById = (bookID) => {
    var config = {
        method: 'get',
        url: `${BOOK_API_BASE_URL}/${bookID}`,
        headers: {
            'Authorization': Authorization,
        }
    };
    return axios(config);
}

const updateBook = (book) => {
    var config = {
        method: 'put',
        url: BOOK_API_BASE_URL,
        headers: {
            'Authorization': Authorization,
            'Content-Type': 'application/json'
        },
        data: book
    };
    return axios(config)
}

const deleteBook = (bookID) => {
    var config = {
        method: 'delete',
        url: `${BOOK_API_BASE_URL}/${bookID}`,
        headers: {
            'Authorization': Authorization,
        }
    };
    return axios(config);
}

const findBookByCriteria = (criteria) => {
    var config = {
        method: 'get',
        url: `${BOOK_API_BASE_URL}/search?query=${criteria}`,
        headers: {
            'Authorization': Authorization,
        }
    };
    return axios(config);
}



export default { getBook, getBookById, createBook, deleteBook, updateBook, findBookByCriteria }