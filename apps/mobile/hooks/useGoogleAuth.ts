import { useEffect, useState } from 'react'
import * as Google from 'expo-auth-session/providers/google'
import useStore from '@/store/zustand'
import * as SecureStore from 'expo-secure-store'
import axios from '@/utils/axios'
import { router } from 'expo-router'
import { errorHandler } from '@/utils/helpers'

const useGoogleAuth = () => {
  const [loading, setLoading] = useState(false)
  const setAuthState = useStore((state) => state.setAuthState)

  const setUser = useStore((state) => state.setUser)
  const currentToken = SecureStore.getItem('accessToken')

  //TODO: Move client ids to config app.json on build
  const [request, response, promptAsync] = Google.useAuthRequest({
    // androidClientId: process.env.GOOGLE_ANDROID_CLIENT_ID,
    androidClientId:
      '205914229452-i7hpqhhga1m65rcfhupgumkq3es78rlh.apps.googleusercontent.com',
    // iosClientId: process.env.GOOGLE_iOS_CLIENT_ID,
    iosClientId:
      '205914229452-hkek3p5sj2pq5l27mdjqvjm09tvdd654.apps.googleusercontent.com',
  })

  useEffect(() => {
    handleSignInWithGoogle()
  }, [response])

  const handleSignInWithGoogle = async () => {
    if (currentToken) return
    setLoading(true)
    if (response?.type === 'success' && response?.authentication?.accessToken) {
      await getUserSessionWithGoogleToken(response?.authentication?.accessToken)
    }
    setLoading(false)
  }

  const getUserSessionWithGoogleToken = async (token: string) => {
    try {
      const response = await axios.post('/api/google/sign-in', { token })

      setAuthState({
        token: response.data.token,
        authenticated: true,
      })
      setUser(response.data.user)

      await SecureStore.setItemAsync('accessToken', response.data.token)
      router.push('/')
    } catch (e) {
      const errors = errorHandler(e as string[])
      return {
        error: true,
        message: errors,
      }
    }
  }

  return { request, promptAsync, loading }
}

export default useGoogleAuth
