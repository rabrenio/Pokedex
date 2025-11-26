import { BorderRadius, Colors } from '@/constants/theme'
import { StyleSheet, View } from 'react-native'

const height = 15

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray[300],
    flex: 1,
    borderRadius: BorderRadius.sm,
    overflow: 'hidden',
    height,
  },
  progress: {
    backgroundColor: Colors.secondary.light,
    height,
  },
})

export default function ProgressBar({ value }: { value: number }) {
  return (
    <View style={styles.container}>
      {value > 0 && <View style={[styles.progress, { width: `${value}%` }]} />}
    </View>
  )
}
