import type { PokemonEndpoints, PokemonPaginatedApiResponse } from '@/types/pokemon'
import { buildPokemonApiUrl } from '@/utils/pokemon-api'
import useFetch from './use-fetch'

interface Pokemon {
  name: string
  url: string
}

export function useFetchPokemons(
  endpoint: PokemonEndpoints,
  queryParams: Record<string, string>
) {
  const baseUrl = buildPokemonApiUrl(endpoint)

  const { data, ...result } = useFetch<PokemonPaginatedApiResponse<Pokemon>>(
    `${baseUrl}?${new URLSearchParams(queryParams).toString()}`,
    (prevData, nextData) => ({
      ...nextData,
      results: [...(prevData?.results ?? []), ...nextData.results],
    })
  )

  return {
    ...result,
    data: data
      ? {
          ...data,
          results: data.results.map(pokemon => {
            const id = pokemon.url.split('/').at(-2)
            return {
              ...pokemon,
              id,
              sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
            }
          }),
        }
      : data,
  }
}
