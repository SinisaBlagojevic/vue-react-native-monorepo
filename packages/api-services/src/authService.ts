import { ApiService } from "./ApiService";

export const login = async(data: { username: string, password: string }) => {
  try {
    const response = await ApiService.post('/login', { ...data });
    return response.data;
  } catch (error) {
    throw error;
  }
}