import { withTiming, withRepeat, withSequence } from 'react-native-reanimated'

export const shakeAnimation = (startValue: number = 0) => {
  return withSequence(
    withTiming(startValue - 10, { duration: 100 }),
    withTiming(startValue + 10, { duration: 100 }),
    withTiming(startValue - 10, { duration: 100 }),
    withTiming(startValue, { duration: 300 })
  )
}
