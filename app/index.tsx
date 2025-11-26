import ErrorMessage from '@/components/error-message'
import Loading from '@/components/loading'
import PokemonId from '@/components/pokemon-id'
import { Colors, Fonts, Spacing } from '@/constants/theme'
import { useFetchPokemons } from '@/hooks/use-fetch-pokemons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Animated, { LinearTransition } from 'react-native-reanimated'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray[100],
    flex: 1,
  },
  pokemonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  pokemonItemNameText: {
    fontSize: Fonts.size.md,
    color: Colors.gray[400],
    textTransform: 'capitalize',
  },
  pokemonSprite: {
    width: 80,
    height: 80,
    marginLeft: Spacing.xxs,
  },
  pokemonIdContainer: {
    marginBottom: Spacing.xxs,
    marginRight: 'auto',
  },
  pokemonItemChevron: {
    marginLeft: 'auto',
    color: Colors.gray[300],
  },
  errorText: {
    fontSize: Fonts.size.xl,
    color: Colors.primary.dark,
  },
})

const pageLimit = 20

export default function Home() {
  const [offset, setOffset] = useState(0)
  const { data, error, loading } = useFetchPokemons('pokemon', {
    offset: offset.toString(),
    limit: pageLimit.toString(),
  })

  if (!data && loading) return <Loading />
  if (error) return <ErrorMessage>Error loading pokemons</ErrorMessage>
  if (!data) return null

  return (
    <View style={styles.container}>
      <Animated.FlatList
        itemLayoutAnimation={LinearTransition}
        data={data.results}
        onEndReached={() => {
          if (!loading && data.results.length < data.count)
            setOffset(prev => prev + pageLimit)
        }}
        renderItem={item => (
          <Link asChild style={styles.pokemonItem} href={`/${item.item.name}`}>
            <Pressable>
              <View>
                <PokemonId
                  id={item.item.id}
                  style={styles.pokemonIdContainer}
                />
                <Text style={styles.pokemonItemNameText}>{item.item.name}</Text>
              </View>
              <Image source={item.item.sprite} style={styles.pokemonSprite} />

              <MaterialIcons
                name="chevron-right"
                size={Fonts.size.heading}
                style={styles.pokemonItemChevron}
              />
            </Pressable>
          </Link>
        )}
      />
    </View>
  )
}
