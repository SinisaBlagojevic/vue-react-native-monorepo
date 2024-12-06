import { AuthState, Store, User } from '@/types/Store'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const defaultState = {
  language: 'en',
  user: {} as User,
  authState: {} as AuthState,
}

const useStore = create<Store>()(
  persist(
    (set, get) => ({
      ...defaultState,
      resetStore: () => set(defaultState),
      setLanguage: (language: string) => set({ language }),
      setUser: (user: User) => set({ user }),
      setAuthState: (authState: AuthState) => {
        console.log('UPDATE AUTH STATE', authState)
        set({ authState })
      },
    }),
    {
      name: 'store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)

export default useStore
