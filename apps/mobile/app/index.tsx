import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useTranslation } from 'react-i18next'

const index = () => {
  const { t } = useTranslation()
  return (
    <View>
      <SafeAreaView>
        <Text>{t('title')}</Text>
      </SafeAreaView>
    </View>
  )
}

export default index
