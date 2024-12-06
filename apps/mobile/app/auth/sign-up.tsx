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
import { icons, images } from '@/constants'
import Button from '@/components/Button'
import { router } from 'expo-router'
import CheckboxWithLabel from '@/components/Checkbox'
import { useTranslation } from 'react-i18next'
import { useAuth } from '@/providers/AuthProvider'
import useGoogleAuth from '@/hooks/useGoogleAuth'

const SignUp = () => {
  const { t } = useTranslation()
  const { onLogin, onRegister } = useAuth()
  const { promptAsync } = useGoogleAuth()

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email address.')
      .required('Email is required.'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long.')
      .required('Password is required.'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match.')
      .required('Confirm Password is required.'),
    acceptTerms: Yup.boolean().oneOf(
      [true],
      'You must accept the terms and conditions.'
    ),
  })

  const handleSignUp = async (values: {
    email: string
    password: string
    passwordConfirm: string
    acceptTerms: boolean
  }) => {
    console.log('Sign-Up values:', values)
    if (onRegister) {
      const result = await onRegister(
        values.email,
        values.password,
        values.passwordConfirm
      )
      if (result && result.error) {
        return Alert.alert('Registration Failed', result.message, [
          { text: 'Try Again', style: 'destructive' },
          { text: 'Ok' },
        ])
      }
      Alert.alert(
        'Verification Link Sent',
        'Your account has been created. To activate this account, please click on link sent to your email address.'
      )

      router.push('/auth/login')
    } else {
      Alert.alert('Error', 'Registration function is not available.')
    }
  }

  return (
    <SafeAreaView className="w-full h-full items-center justify-center">
      <ScrollView className="p-6 w-full">
        <Image
          source={images.profitAppLogo}
          className="w-full h-32"
          resizeMode="contain"
        />

        <View className="text-center pb-8 flex-row justify-center">
          <Text className="font-rbold text-xl text-gray-100 text-center">
            {t('auth.getStarted')}{' '}
          </Text>
          <View>
            <Text className="font-rbold text-xl text-gray-100 inline-block">
              {t('auth.now')}
            </Text>
            <Image
              source={icons.orangeVector}
              className="mt-0"
              resizeMode="contain"
            />
          </View>
        </View>

        <Formik
          initialValues={{
            email: '',
            password: '',
            passwordConfirm: '',
            acceptTerms: false,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSignUp}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
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
                  inputMode="email"
                  errorText={touched.email && errors.email ? errors.email : ''}
                  error={!!(touched.email && errors.email)}
                />
              </View>

              <View className="mb-4">
                <Input
                  placeholder={t('auth.enterPassword')}
                  value={values.password}
                  onChange={handleChange('password')}
                  onBlur={() => handleBlur('password')}
                  icon="lock"
                  iconPosition="start"
                  isPassword
                  errorText={
                    touched.password && errors.password ? errors.password : ''
                  }
                  error={!!(touched.password && errors.password)}
                />
              </View>

              <Input
                placeholder={t('auth.confirmPassword')}
                value={values.passwordConfirm}
                onChange={handleChange('passwordConfirm')}
                onBlur={() => handleBlur('passwordConfirm')}
                icon="lock"
                iconPosition="start"
                isPassword
                errorText={
                  touched.passwordConfirm && errors.passwordConfirm
                    ? errors.passwordConfirm
                    : ''
                }
                error={!!(touched.passwordConfirm && errors.passwordConfirm)}
              />

              <View className="py-2">
                <CheckboxWithLabel
                  label={t('auth.acceptTermsDescription')}
                  isChecked={values.acceptTerms}
                  onChange={() =>
                    setFieldValue('acceptTerms', !values.acceptTerms)
                  }
                  labelPosition="right"
                  textClassName="text-gray-100 font-rregular"
                />
                {touched.acceptTerms && errors.acceptTerms ? (
                  <Text className="text-red-500 text-xs">
                    {errors.acceptTerms}
                  </Text>
                ) : null}
              </View>

              <View className="pt-4">
                <Button
                  title={t('auth.signUp')}
                  onPress={() => handleSubmit()}
                  disabled={
                    !values.email || !values.password || !values.acceptTerms
                  }
                />

                <Text className="uppercase text-center text-gray-100 font-rbold text-lg my-2">
                  {t('auth.or')}
                </Text>
                <Button
                  onPress={() => promptAsync()}
                  title={t('auth.signUpWithGoogle')}
                  outline={true}
                />
              </View>
            </>
          )}
        </Formik>

        <View className="flex-row justify-between pt-2">
          <Text className="font-rmedium">{t('auth.alreadyHaveAccount')}</Text>
          <TouchableOpacity onPress={() => router.push('/auth/login')}>
            <Text className="text-blue-100 font-rregular">
              {t('auth.signIn')}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
