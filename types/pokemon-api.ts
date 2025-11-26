export type PokemonEndpoints = 'pokemon' | 'type'

export interface PokemonApiResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}
