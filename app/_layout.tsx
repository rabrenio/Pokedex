import { Colors } from '@/constants/theme'
import { Stack, useGlobalSearchParams } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'

function capitalizeFirstLetter(text: string | undefined) {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export default function RootLayout() {
  const { pokemon } = useGlobalSearchParams<{ pokemon?: string }>()

  return (
    <>
      <Stack
        screenOptions={{
          headerTintColor: Colors.white[100],
          headerStyle: { backgroundColor: Colors.primary.base },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Login' }} />
        <Stack.Screen name="pokemons" options={{ title: 'Pokedex' }} />
        <Stack.Screen
          name="[pokemon]"
          options={{
            title: capitalizeFirstLetter(pokemon),
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  )
}
