import ErrorMessage from '@/components/error-message'
import Loading from '@/components/loading'
import PokemonId from '@/components/pokemon-id'
import ProgressBar from '@/components/progress-bar'
import {
  BorderRadius,
  Colors,
  Fonts,
  PokemonTypeColors,
  Spacing,
  TypeTextColors,
} from '@/constants/theme'
import useFetchPokemon from '@/hooks/use-fetch-pokemon'
import { Image } from 'expo-image'
import { useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

function removeHyphens(text: string) {
  return text.replace(/-/g, ' ')
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.base,
    gap: Spacing.xs,
  },
  pokemonNameText: {
    fontSize: Fonts.size.heading,
    fontWeight: 500,
    color: Colors.gray[400],
    textTransform: 'capitalize',
  },
  pokemonSprite: {
    width: 150,
    height: 150,
  },
  mainDetails: {
    alignItems: 'center',
    gap: Spacing.xxs,
  },
  statMainContainer: {
    gap: Spacing.xs,
  },
  statContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statNameText: {
    textTransform: 'capitalize',
    color: Colors.gray[400],
    fontWeight: 500,
    width: 120,
  },
  titleText: {
    fontSize: Fonts.size.xl,
    fontWeight: 500,
    color: Colors.primary.light,
  },
  pokemonTypeContainer: {
    flexDirection: 'row',
    marginTop: Spacing.xxs,
    gap: Spacing.xxs,
  },
  pokemonType: {
    paddingHorizontal: Spacing.xs,
    paddingVertical: Spacing.xxs,
    backgroundColor: 'yellow',
    borderRadius: BorderRadius.sm,
  },
})

export default function Pokemon() {
  const { pokemon } = useLocalSearchParams<{ pokemon: string }>()
  const { data, loading, error } = useFetchPokemon(pokemon)

  if (!data && loading) return <Loading />
  if (error) return <ErrorMessage>Error loading pokemon</ErrorMessage>
  if (!data) return null

  return (
    <View style={styles.container}>
      <View style={styles.mainDetails}>
        <Image
          style={styles.pokemonSprite}
          source={data.sprites.other['official-artwork'].front_default}
        />
        <PokemonId id={data.id} />
        <Text style={styles.pokemonNameText}>{pokemon}</Text>
      </View>
      <View>
        <Text style={styles.titleText}>TYPES</Text>
        <View style={styles.pokemonTypeContainer}>
          {data.types.map(pokemonType => (
            <View
              key={pokemonType.type.name}
              style={[
                styles.pokemonType,
                { backgroundColor: PokemonTypeColors[pokemonType.type.name] },
              ]}
            >
              <Text style={{ color: TypeTextColors[pokemonType.type.name] }}>
                {pokemonType.type.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.statMainContainer}>
        <Text style={styles.titleText}>STATS</Text>
        {data.stats.map(stat => (
          <View key={stat.stat.name} style={styles.statContainer}>
            <Text style={styles.statNameText}>
              {removeHyphens(stat.stat.name)}
            </Text>
            <ProgressBar value={stat.base_stat} />
          </View>
        ))}
      </View>
    </View>
  )
}
