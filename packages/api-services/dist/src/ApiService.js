import axios from 'axios';
import UserService from "./UserService";
const ApiService = {
    interceptor401: null,
    /**
     * Initialize API Service
     */
    init() {
        // window.axios = axios;
        axios.defaults.baseURL = '/api';
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        if (UserService.getToken()) {
            ApiService.setUserHeader();
        }
    },
    /**
     * Set User Authorization Header
     */
    setUserHeader() {
        axios.defaults.headers.common['Authorization'] = `Bearer ${UserService.getToken()}`;
    },
    /**
     * Set User Authorization Header
     */
    removeUserHeader() {
        delete axios.defaults.headers.common['Authorization'];
    },
    /**
     * Handle the 401 error response
     */
    mountInterceptor401() {
        this.interceptor401 = axios.interceptors.response.use(response => {
            return response;
        }, error => {
            // If server responded with 401 - Unauthorized
            if (error.request.status == 401) {
                // Clear User from the Store
                UserService.removeUser();
                // Clear Access Token from Local Storage
                UserService.removeToken();
            }
            return Promise.reject(error);
        });
    },
    /**
     * Remove the 401 interceptor
     */
    unmountInterceptor401() {
        axios.interceptors.response.eject(this.interceptor401);
    },
    /**
     * Get Method Wrapper
     */
    get(uri, config = null) {
        return axios.get(uri, config);
    },
    /**
     * Post Method Wrapper
     */
    post(uri, data, config = null) {
        // if (data instanceof CodForm) {
        //     return data.send('post', uri, config)
        // }
        return axios.post(uri, data, config);
    },
    /**
     * Put Method Wrapper
     */
    put(uri, data, config = null) {
        // if (data instanceof CodForm) {
        //     return data.send('put', uri, config)
        // }
        return axios.put(uri, data, config);
    },
    /**
     * Patch Method Wrapper
     */
    patch(uri, data, config = null) {
        // if (data instanceof CodForm) {
        //     return data.send('patch', uri, config)
        // }
        return axios.patch(uri, data, config);
    },
    /**
     * Delete Method Wrapper
     */
    delete(uri, config = null) {
        return axios.delete(uri, config);
    },
    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
     **/
    customRequest(data) {
        return axios(data);
    },
};
export default ApiService;
