import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Input from '@/components/Input'
import Button from '@/components/Button'
import { images } from '@/constants'
import { router } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { useAuth } from '@/providers/AuthProvider'

const ForgotPassword = () => {
  const { t } = useTranslation()
  const { onForgotPassword } = useAuth()

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email address.')
      .required('Email is required.'),
  })

  const handleForgotPassword = async (values: { email: string }) => {
    if (onForgotPassword) {
      const result = await onForgotPassword(values.email)
      if (result && result.error) {
        return Alert.alert('Password Reset Failed', result.message)
      }
    } else {
      Alert.alert(
        'Password Reset Failed',
        'Password reset function is not available.'
      )
    }
    Alert.alert(
      'Password Reset',
      'If an account with this email exists, you will receive instructions to reset your password.'
    )
    // Perform password reset API call here
    console.log('Email submitted:', values.email)
  }

  return (
    <SafeAreaView className="w-full h-full items-center justify-center">
      <ScrollView className="p-6 flex-1">
        <Image
          source={images.profitAppLogo}
          className="w-full h-44"
          resizeMode="contain"
        />

        <Text className="text-center py-8 font-rbold text-xl text-gray-100">
          {t('auth.forgotPassword')}
        </Text>

        <Text className="text-center pb-4 font-rregular text-base text-gray-100">
          {t('auth.forgotPasswordDescription')}
        </Text>

        <Formik
          initialValues={{ email: '' }}
          validationSchema={validationSchema}
          onSubmit={handleForgotPassword}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View className="mb-4">
                <Input
                  placeholder={t('auth.enterEmail')}
                  value={values.email}
                  onChange={handleChange('email')}
                  onBlur={() => handleBlur('email')}
                  icon="mail"
                  iconPosition="start"
                  errorText={touched.email && errors.email ? errors.email : ''}
                  error={!!(touched.email && errors.email)}
                />
              </View>

              <View className="pt-4">
                <Button
                  title={t('auth.sendResetInstructions')}
                  onPress={() => handleSubmit()}
                  disabled={!values.email || !!errors.email}
                />
              </View>
            </>
          )}
        </Formik>

        <View className="pt-8 flex-row justify-center">
          <TouchableOpacity onPress={() => router.push('/auth/login')}>
            <Text className="text-blue-100 font-rregular">
              {t('auth.backToLogin')}
            </Text>
          </TouchableOpacity>
        </View>
        <View className="pt-8">
          <Text className="text-center text-gray-100 font-rregular">
            {t('auth.broughtToYouBy')}
          </Text>
          <Image
            source={images.profitAppLogoWide}
            className="w-full h-16"
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPassword
