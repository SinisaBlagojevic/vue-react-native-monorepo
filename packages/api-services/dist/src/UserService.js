import ApiService from './ApiService';
const USER_KEY = 'user';
const USER_TOKEN_KEY = 'access_token';
const UserService = {
    /**
     * Set User in Local Storage and Configure API Headers
     */
    setUser(user) {
        if (!user) {
            this.removeUser();
            return;
        }
        localStorage.setItem(USER_KEY, JSON.stringify(user));
        this.setToken(user.token);
        ApiService.setUserHeader();
        ApiService.mountInterceptor401();
    },
    /**
     * Get User from Local Storage
     */
    getUser() {
        const user = localStorage.getItem(USER_KEY);
        return user ? JSON.parse(user) : null;
    },
    /**
     * Remove User and Clear Headers
     */
    removeUser() {
        localStorage.removeItem(USER_KEY);
        this.removeToken();
        ApiService.removeUserHeader();
        ApiService.unmountInterceptor401();
    },
    /**
     * Get Token from Local Storage
     */
    getToken() {
        return localStorage.getItem(USER_TOKEN_KEY);
    },
    /**
     * Set Token in Local Storage
     */
    setToken(token) {
        localStorage.setItem(USER_TOKEN_KEY, token);
    },
    /**
     * Remove Token from Local Storage
     */
    removeToken() {
        localStorage.removeItem(USER_TOKEN_KEY);
    },
    /**
     * Clear All User-Related Data
     */
    clearAll() {
        this.removeUser();
    },
};
export default UserService;
export { UserService };
