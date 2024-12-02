import React, { useCallback, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'

import { useTranslation } from 'react-i18next'
import { fetchData } from 'api-services'

const index = () => {
  const { t } = useTranslation()
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

  return (
    <View onLayout={onLayoutRootView}>
      <SafeAreaView>
        <Text>{t('title')}</Text>
      </SafeAreaView>
    </View>
  )
}

export default index
