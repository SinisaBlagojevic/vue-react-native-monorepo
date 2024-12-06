import React, { useEffect, useState } from 'react'
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  InputModeOptions,
} from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated'
import { shakeAnimation } from '@/utils/animations'

interface InputProps {
  placeholder?: string
  value?: string
  onChange?: (text: string) => void
  icon?: string
  iconPosition?: 'start' | 'end'
  isPassword?: boolean
  helperText?: string
  width?: number | string
  height?: number | string
  iconColor?: string
  containerStyle?: string
  error?: boolean
  errorText?: string
  onBlur?: () => void
  inputMode?: InputModeOptions
}

const Input = ({
  placeholder = 'Enter text',
  value = '',
  onChange,
  onBlur,
  icon,
  iconPosition = 'start',
  isPassword = false,
  iconColor = 'gray',
  containerStyle,
  error = false,
  errorText,
  inputMode,
}: InputProps) => {
  const [text, setText] = useState(value)
  const [isPasswordVisible, setIsPasswordVisible] = useState(!isPassword)

  const translateX = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  const handleChange = (input: string) => {
    setText(input)
    if (onChange) {
      onChange(input)
    }
  }

  useEffect(() => {
    if (error) {
      translateX.value = shakeAnimation(0)
    }
  }, [error])

  return (
    <View style={{ width: '100%' }}>
      <Animated.View
        style={[
          {
            width: '100%',
            borderRadius: 8,
            borderWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            height: 48,
            paddingHorizontal: 16,
          },
          error
            ? { borderColor: 'red' }
            : { borderColor: 'gray', borderWidth: 1 },
          animatedStyle,
        ]}
        className={containerStyle}
      >
        {icon && iconPosition === 'start' && (
          <Feather
            name={icon as typeof Feather.defaultProps}
            size={24}
            color={iconColor}
            style={{ marginRight: 8 }}
          />
        )}
        <TextInput
          value={text}
          onChangeText={handleChange}
          onBlur={onBlur}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={!isPasswordVisible && isPassword}
          inputMode={inputMode}
          autoCapitalize="none"
          autoCorrect={false}
          style={{
            flex: 1,
            color: 'black',
            fontSize: 16,
            textAlignVertical: 'center',
            height: '100%',
          }}
        />
        {isPassword && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Feather
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={24}
              color={iconColor}
            />
          </TouchableOpacity>
        )}
        {icon && iconPosition === 'end' && (
          <Feather
            name={icon as typeof Feather.defaultProps}
            size={24}
            color={iconColor}
            style={{ marginLeft: 8 }}
          />
        )}
      </Animated.View>
      {errorText && (
        <Text
          style={{
            color: 'red',
            fontSize: 12,
            marginTop: 4,
            marginLeft: 8,
          }}
        >
          {errorText}
        </Text>
      )}
    </View>
  )
}

export default Input
