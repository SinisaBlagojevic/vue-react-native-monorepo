import React from 'react'
import { View, Text } from 'react-native'
import { Checkbox } from 'tamagui'
import Feather from '@expo/vector-icons/Feather'

interface CheckboxWithLabelProps {
  label: string
  isChecked: boolean
  onChange: (checked: boolean) => void
  labelPosition?: 'left' | 'right'
  textClassName?: string
  checkboxClassName?: string
}

const CheckboxWithLabel = ({
  label,
  isChecked,
  onChange,
  labelPosition = 'right',
  textClassName = '',
  checkboxClassName = '',
}: CheckboxWithLabelProps) => {
  return (
    <View
      className={`flex-row items-center ${
        labelPosition === 'left' ? 'flex-row-reverse' : ''
      }`}
    >
      <Checkbox
        checked={isChecked}
        onCheckedChange={onChange}
        size="$6"
        className={`mr-2 ${checkboxClassName} border border-gray-100`}
      >
        <Checkbox.Indicator>
          <Feather name="check" size={24} color="black" />
        </Checkbox.Indicator>
      </Checkbox>
      <Text className={`flex-shrink flex-grow text-base ${textClassName}`}>
        {label}
      </Text>
    </View>
  )
}

export default CheckboxWithLabel
