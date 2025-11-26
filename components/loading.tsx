import { Colors } from '@/constants/theme'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.secondary.base} />
    </View>
  )
}
