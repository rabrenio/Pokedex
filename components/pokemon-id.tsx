import { BorderRadius, Colors, Fonts, Spacing } from '@/constants/theme'
import { StyleSheet, Text, type StyleProp, type TextStyle } from 'react-native'

const styles = StyleSheet.create({
  pokemonItemIdText: {
    fontSize: Fonts.size.xl,
    fontWeight: 700,
    backgroundColor: Colors.gray[200],
    borderRadius: BorderRadius.sm,
    padding: Spacing.xxs,
  },
})

type Props = {
  id: string | undefined
  style?: StyleProp<TextStyle>
}

export default function PokemonId({ id, style }: Props) {
  return <Text style={[styles.pokemonItemIdText, style]}>#{id}</Text>
}
