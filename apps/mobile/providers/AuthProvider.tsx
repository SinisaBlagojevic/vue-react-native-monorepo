import * as SecureStore from 'expo-secure-store'
import React, { createContext, useContext, useEffect } from 'react'
import axios from '@/utils/axios'
import useStore from '@/store/zustand'
import { errorHandler } from '@/utils/helpers'

interface Auth {
  authState?: {
    token: string | null
    authenticated: boolean | null
  }
  onRegister?: (
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<any>
  onLogin?: (email: string, password: string) => Promise<any>
  onForgotPassword?: (email: string) => Promise<any>
  onLogout?: () => Promise<any>
}

const apiUrl = process.env.EXPO_PUBLIC_API_URL
const TOKEN_KEY = 'accessToken'
const AuthContext = createContext<Auth>({
  authState: { token: null, authenticated: null },
})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const setUser = useStore((state) => state.setUser)
  const setAuthState = useStore((state) => state.setAuthState)

  //TODO: Check if the token is still valid (not expired)
  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY)

      if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        setAuthState({
          token,
          authenticated: true,
        })
      }
    }

    loadToken()
  }, [])

  const register = async (
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    try {
      await axios.post(`${apiUrl}/api/register`, {
        email,
        password,
        password_confirmation: confirmPassword,
      })
    } catch (error) {
      const errors = errorHandler(error as string[])
      return {
        error: true,
        message: errors,
      }
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${apiUrl}/api/login`, {
        email,
        password,
      })
      const { token } = response.data
      setAuthState({
        token: token,
        authenticated: true,
      })
      setUser(response.data.user)

      //Add the token to the axios headers
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      await SecureStore.setItemAsync(TOKEN_KEY, token)
      return response
    } catch (error) {
      const errors = errorHandler(error as string[])
      return {
        error: true,
        message: errors,
      }
    }
  }

  const forgotPassword = async (email: string) => {
    try {
      return await axios.post(`${apiUrl}/api/reset-password-link`, {
        email,
      })
    } catch (error) {
      const errors = errorHandler(error as string[])
      return {
        error: true,
        message: errors,
      }
    }
  }

  const logout = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY)
    axios.defaults.headers.common['Authorization'] = ''
    setAuthState({
      token: '',
      authenticated: false,
    })
  }

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    onForgotPassword: forgotPassword,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
