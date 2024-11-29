import { Store } from '@/types/Store'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const defaultState = {
  language: 'en',
}

const useStore = create<Store>()(
  persist(
    (set, get) => ({
      ...defaultState,
      resetStore: () => set(defaultState),
      setLanguage: (language: string) => set({ language }),
    }),
    {
      name: 'store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)

export default useStore
