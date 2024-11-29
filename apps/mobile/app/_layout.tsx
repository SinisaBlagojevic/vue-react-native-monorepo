import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import defaultConfig from '@tamagui/config/v3'
import { createTamagui, TamaguiProvider } from 'tamagui'
import I18nProvider from '@/providers/I18nProvider'

const config = createTamagui(defaultConfig)

const RootLayout = () => {
  return (
    <TamaguiProvider config={config}>
      <I18nProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="home" options={{ headerShown: false }} />
        </Stack>
      </I18nProvider>
    </TamaguiProvider>
  )
}

export default RootLayout
