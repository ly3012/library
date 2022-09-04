
import axios from 'axios';
import httpClient from "../../http-common.js"

const BOOK_API_BASE_URL = "http://localhost:8080/admin/books";



    const getBook=()=>{
        return axios.get(BOOK_API_BASE_URL);
    }

    const createBook =(book)=>{
        return axios.post(BOOK_API_BASE_URL, book);
    }

    const getBookById =(bookID)=>{
        return axios.get(`${BOOK_API_BASE_URL}/${bookID}`);
    }

    const updateBook =(book)=>{
        return axios.put(`${BOOK_API_BASE_URL}`, book);
    }

    const deleteBook =(bookID)=>{
        return axios.delete(`${BOOK_API_BASE_URL}/${bookID}`);
    }

export default {getBook, getBookById, createBook, deleteBook, updateBook}