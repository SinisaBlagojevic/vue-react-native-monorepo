import { ApiService } from "./ApiService";
export const login = async (data) => {
    try {
        const response = await ApiService.post('/login', { ...data });
        return response.data;
    }
    catch (error) {
        throw error;
    }
};
