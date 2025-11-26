import type { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default function ErrorMessage({ children }: { children: ReactNode }) {
  return <View style={styles.container}>{children}</View>
}
