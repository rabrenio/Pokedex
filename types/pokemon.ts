export type PokemonEndpoints = 'pokemon' | 'type'

export interface PokemonPaginatedApiResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export type PokemonTypes =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'stellar'
  | 'unknown'

type PokemonStatName =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed'

export interface PokemonDetail {
  base_experience: number
  height: number
  id: string
  name: string
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
        front_shiny: string
      }
    }
  }
  stats: [
    {
      base_stat: number
      effort: number
      stat: {
        name: PokemonStatName
        url: string
      }
    }
  ]
  types: [
    {
      slot: 1
      type: {
        name: PokemonTypes
        url: string
      }
    }
  ]
  weight: number
}
