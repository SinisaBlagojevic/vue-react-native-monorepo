import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ButtonProps,
} from 'react-native'

interface CustomButtonProps extends ButtonProps {
  outline?: boolean
  containerStyles?: string
  textStyles?: string
  isLoading?: boolean
  icon?: string
  iconStyles?: string
  disabled?: boolean
}

const Button = ({
  title,
  onPress,
  isLoading,
  containerStyles,
  textStyles,
  icon,
  iconStyles,
  outline = false,
  disabled = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`rounded-lg min-h-[50px] justify-center items-center ${
        outline
          ? 'border border-blue-100 bg-transparent'
          : 'bg-blue-100 border-transparent'
      } ${containerStyles} ${isLoading || disabled ? 'opacity-50' : ''}`}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={outline ? '#000' : '#fff'} />
      ) : (
        <View className="flex-row items-center">
          {icon && <View className={iconStyles}>{icon}</View>}
          <Text
            style={[
              {
                color: outline ? '#009edc' : '#ffffff',
              },
            ]}
            className={`${outline ? 'font-rregular' : 'font-rbold'}`}
          >
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default Button
