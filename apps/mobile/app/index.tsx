import React, { useCallback, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { useTranslation } from 'react-i18next'
import { useAuth } from '@/providers/AuthProvider'
import { Redirect } from 'expo-router'
import Button from '@/components/Button'
import useStore from '@/store/zustand'

const index = () => {
  const { t } = useTranslation()
  const { onLogout } = useAuth()
  const { authenticated } = useStore((state) => state.authState)

  const [loaded] = useFonts({
    'Roboto-Black': require('../assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Italic': require('../assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Thin': require('../assets/fonts/Roboto-Thin.ttf'),
  })

  const onLayoutRootView = useCallback(() => {
    if (loaded) {
      SplashScreen.hide()
    }
  }, [loaded])

  // Return null while fonts are loading
  if (!loaded) {
    return null
  }

  const logout = async () => {
    if (onLogout) {
      await onLogout()
    }
  }

  if (!authenticated) return <Redirect href="/auth/login" />

  return (
    <View onLayout={onLayoutRootView}>
      <SafeAreaView className="px-4">
        <Text>{t('title')}</Text>
        <Button onPress={logout} title="Logout" />
      </SafeAreaView>
    </View>
  )
}

export default index
