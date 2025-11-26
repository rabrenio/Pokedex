import type { PokemonDetail } from '@/types/pokemon'
import { buildPokemonApiUrl } from '@/utils/pokemon-api'
import useFetch from './use-fetch'



export default function useFetchPokemon(pokemon: string) {
  return useFetch<PokemonDetail>(buildPokemonApiUrl(`pokemon/${pokemon}`))
}
