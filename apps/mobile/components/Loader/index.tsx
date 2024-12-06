import { View, ActivityIndicator } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View className="w-full h-full justify-center items-center absolute">
      <ActivityIndicator size="large" color="#0256B9" />
    </View>
  )
}

export default Loader
