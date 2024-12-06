import React from 'react'
import { Stack } from 'expo-router'
import defaultConfig from '@tamagui/config/v3'
import { createTamagui, TamaguiProvider } from 'tamagui'
import I18nProvider from '@/providers/I18nProvider'
import { AuthProvider } from '@/providers/AuthProvider'

import 'expo-dev-client'

// Create the Tamagui configuration
const config = createTamagui(defaultConfig)

const RootLayout = () => {
  return (
    <AuthProvider>
      <TamaguiProvider config={config}>
        <I18nProvider>
          <Stack>
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="auth" options={{ headerShown: false }} />
          </Stack>
        </I18nProvider>
      </TamaguiProvider>
    </AuthProvider>
  )
}

export default RootLayout
