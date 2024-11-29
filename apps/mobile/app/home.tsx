import { View, Text } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  return (
    <View className="text-2xl text-gray">
      <Text>{t('title')}</Text>
    </View>
  )
}

export default Home
