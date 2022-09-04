
import axios from 'axios';
import httpClient from "../../http-common.js"

const BOOK_API_BASE_URL = "http://localhost:8080/admin/readers";

    const getReader=()=>{
        return axios.get(BOOK_API_BASE_URL);
    }

    const createReader =(reader)=>{
        return axios.post(BOOK_API_BASE_URL, reader);
    }

    const getReaderById =(readerID)=>{
        return axios.get(`${BOOK_API_BASE_URL}/${readerID}`);
    }

    const updateReader =(reader)=>{
        return axios.put(`${BOOK_API_BASE_URL}`, reader);
    }

    const deleteReader =(readerID)=>{
        return axios.delete(`${BOOK_API_BASE_URL}/${readerID}`);
    }

export default {getReader, getReaderById, createReader, deleteReader, updateReader}