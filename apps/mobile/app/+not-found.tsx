import React from 'react'
import { Link, Stack } from 'expo-router'
import { View, Text } from 'react-native'

export default function NotFoundScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-5">
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Text className="text-lg font-bold text-red-500">Page Not Found</Text>
      <Link
        href="/"
        className="mt-4 py-3 px-6 bg-blue-500 text-white rounded-md"
      >
        Go Back to Home
      </Link>
    </View>
  )
}
