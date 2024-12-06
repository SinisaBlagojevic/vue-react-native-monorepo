import axios from 'axios'
import * as Device from 'expo-device'

const API_URL = process.env.EXPO_PUBLIC_API_URL

// Create an Axios instance
const customAxios = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a request interceptor to include the device name in the headers
customAxios.interceptors.request.use(
  async (config) => {
    config.headers['Device-Name'] = Device.deviceName ?? 'Unknown'
    console.log('CONFIG SXIOS', config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default customAxios
