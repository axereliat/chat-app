export class Auth {
    static saveData(token, username, userId) {
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem('userId', userId);
    }

    static isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    static getUsername() {
        return localStorage.getItem('username');
    }

    static getUserId() {
        return localStorage.getItem('userId');
    }

    static getToken() {
        return localStorage.getItem('token');
    }

    static logout() {
        localStorage.clear();
    }
}