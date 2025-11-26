export const Spacing = {
  xxs: 8,
  xs: 12,
  base: 16,
}

export const Colors = {
  primary: {
    light: '#E24947',
    base: '#C63A38',
    dark: '#8F2929',
  },
  secondary: {
    light: '#2DB7FF',
    base: '#0096DA',
  },
  gray: {
    100: '#F3F4F6',
    200: '#DEE0E3',
    300: '#B7B9C0',
    400: '#70737D',
    900: '#1E1F23',
  },
  white: {
    100: '#fff',
  },
}

export const PokemonTypeColors = {
  normal: '#A8A77A',
  fighting: '#C22E28',
  flying: '#A98FF3',
  poison: '#A33EA1',
  ground: '#E2BF65',
  rock: '#B6A136',
  bug: '#A6B91A',
  ghost: '#735797',
  steel: '#B7B7CE',
  fire: '#EE8130',
  water: '#6390F0',
  grass: '#7AC74C',
  electric: '#F7D02C',
  psychic: '#F95587',
  ice: '#96D9D6',
  dragon: '#6F35FC',
  dark: '#705746',
  fairy: '#D685AD',
  stellar: '#5F91D4', // custom since stellar is new
  unknown: '#68A090', // same as PokeAPI "??? type"
} as const

export const TypeTextColors = {
  normal: '#1A1A1A', // bg is light -> dark text
  fighting: '#FFFFFF',
  flying: '#FFFFFF',
  poison: '#FFFFFF',
  ground: '#1A1A1A',
  rock: '#1A1A1A',
  bug: '#1A1A1A',
  ghost: '#FFFFFF',
  steel: '#1A1A1A',
  fire: '#FFFFFF',
  water: '#FFFFFF',
  grass: '#1A1A1A',
  electric: '#1A1A1A',
  psychic: '#FFFFFF',
  ice: '#1A1A1A',
  dragon: '#FFFFFF',
  dark: '#FFFFFF',
  fairy: '#1A1A1A',
  stellar: '#FFFFFF', // bright-deep blue -> white text
  unknown: '#FFFFFF', // teal-ish -> white text
}

export const Fonts = {
  size: {
    md: 16,
    xl: 20,
    heading: 32,
  },
}

export const BorderRadius = {
  sm: 8,
}
