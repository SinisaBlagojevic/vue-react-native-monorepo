import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Input from '@/components/Input'
import { images } from '@/constants'
import CheckboxWithLabel from '@/components/Checkbox'
import Button from '@/components/Button'
import { router } from 'expo-router'
import { useTranslation } from 'react-i18next'
import { useAuth } from '@/providers/AuthProvider'
import useGoogleAuth from '@/hooks/useGoogleAuth'
import Loader from '@/components/Loader'

const Login = () => {
  const { t } = useTranslation()
  const { onLogin } = useAuth()
  const { promptAsync, loading } = useGoogleAuth()

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required'),
  })

  const handleLogin = async (values: { email: string; password: string }) => {
    if (onLogin) {
      const result = await onLogin(values.email, values.password)
      if (result && result.error) {
        return Alert.alert('Login failed', result.message)
      }
      Alert.alert('Login successful!', `Welcome back, ${values.email}!`)
      router.push('/')
    } else {
      Alert.alert('Login failed', 'Login function is not available.')
    }
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <ScrollView className="p-6 w-full">
        {loading && <Loader />}
        <Image
          source={images.profitAppLogo}
          className="w-full h-32"
          resizeMode="contain"
        />

        <Text className="text-center py-8 font-rbold text-xl text-gray-100">
          {t('auth.signIntoAccount')}
        </Text>

        <Formik
          initialValues={{ email: '', password: '', rememberMe: false }}
          validationSchema={LoginSchema}
          onSubmit={(values) => handleLogin(values)}
          validateOnChange={true}
          validateOnBlur={true}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
            isValid,
            dirty,
          }) => (
            <View>
              <View className="mb-4">
                <Input
                  placeholder={t('auth.enterEmail')}
                  value={values.email}
                  onChange={handleChange('email')}
                  onBlur={() => handleBlur('email')}
                  icon="mail"
                  iconPosition="start"
                  inputMode="email"
                  errorText={touched.email && errors.email ? errors.email : ''}
                  error={!!(touched.email && errors.email)}
                />
              </View>
              <Input
                placeholder={t('auth.enterPassword')}
                value={values.password}
                onChange={handleChange('password')}
                onBlur={() => handleBlur('password')}
                icon="lock"
                iconPosition="start"
                isPassword
                inputMode="text"
                errorText={
                  touched.password && errors.password ? errors.password : ''
                }
                error={!!(touched.password && errors.password)}
              />

              <View className="flex-row justify-between items-center py-4">
                <View>
                  <CheckboxWithLabel
                    label={t('auth.rememberMe')}
                    isChecked={values.rememberMe}
                    onChange={() =>
                      setFieldValue('rememberMe', !values.rememberMe)
                    }
                    labelPosition="right"
                    textClassName="text-black-100 font-rregular"
                  />
                </View>
                <TouchableOpacity>
                  <Text
                    onPress={() => router.push('/auth/forgot-password')}
                    className="text-blue-100 font-rregular"
                  >
                    {t('auth.forgotPassword')}
                  </Text>
                </TouchableOpacity>
              </View>

              <View className="pt-4">
                <Button
                  title={t('auth.signIn')}
                  onPress={() => handleSubmit()}
                  disabled={!isValid || !dirty}
                />

                <Text className="uppercase text-center text-gray-100 font-rbold text-lg my-2">
                  {t('auth.or')}
                </Text>
                <Button
                  onPress={() => promptAsync()}
                  title={t('auth.signInWithGoogle')}
                  outline={true}
                />
              </View>
              <View className="flex-row justify-between pt-2">
                <Text className="font-rmedium">
                  {t('auth.dontHaveAccount')}
                </Text>
                <TouchableOpacity onPress={() => router.push('/auth/sign-up')}>
                  <Text className="text-blue-100 font-rregular">
                    {t('auth.createAccount')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>

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

export default Login
