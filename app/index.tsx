import { BorderRadius, Colors, Fonts, Spacing } from '@/constants/theme'
import { useFetchPokemons } from '@/hooks/use-fetch-pokemons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import { useState } from 'react'
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Animated, { LinearTransition } from 'react-native-reanimated'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray[100],
    flex: 1,
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pokemonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray[200],
  },
  pokemonItemIdText: {
    fontSize: Fonts.size.xl,
    fontWeight: 'bold',
    backgroundColor: Colors.gray[200],
    borderRadius: BorderRadius.sm,
    padding: Spacing.xxs,
    marginBottom: Spacing.xxs,
    marginRight: 'auto',
  },
  pokemonItemNameText: {
    fontSize: Fonts.size.md,
    color: Colors.gray[900],
    textTransform: 'capitalize',
  },
  pokemonSprite: {
    width: 80,
    height: 80,
    marginLeft: Spacing.xxs,
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

  if (!data && loading)
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator color={Colors.secondary.base} />
      </View>
    )

  if (error) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <Text style={styles.errorText}>Error loading pokemons</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Animated.FlatList
        itemLayoutAnimation={LinearTransition}
        data={data?.results ?? []}
        onEndReached={() => {
          if (!loading && data && data.results.length < data.count)
            setOffset(prev => prev + pageLimit)
        }}
        renderItem={item => (
          <Link asChild style={styles.pokemonItem} href={`/${item.item.name}`}>
            <Pressable>
              <View>
                <Text style={styles.pokemonItemIdText}>#{item.item.id}</Text>
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
