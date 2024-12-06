import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  return (
    <View className="text-2xl text-gray">
      <SafeAreaView>
        <Text>This is home</Text>
      </SafeAreaView>
    </View>
  )
}

export default Home
