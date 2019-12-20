export class Auth {
    static saveData(data) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        localStorage.setItem('userId', data.userId);
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