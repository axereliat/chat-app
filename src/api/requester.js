import axios from "axios";

const baseUrl = 'http://localhost:8000/';
export class Requester {

    static register(email, username, password, confirmPassword) {
        return axios.post(baseUrl + 'users', {
            email, username, password, confirmPassword
        });
    }

    static login(username, password) {
        return axios.post(baseUrl + 'login', {
            username, password
        });
    }

    static fetchUsers() {
        return axios.get(baseUrl + 'users');
    }
}