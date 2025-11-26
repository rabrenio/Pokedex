const BASE_API_URL = 'https://pokeapi.co/api/v2'

export function buildPokemonApiUrl(endpoint: string) {
  return [BASE_API_URL, endpoint].join('/')
}
