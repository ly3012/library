import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:8080/admin/books',
    headers: {
        'Content-Type': 'application/json'
    }
});