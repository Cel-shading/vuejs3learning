export default interface Pokemon {
  pokedexId: number
  generation: number
  category: string
  name: {
    fr: string
    en: string
    jp: string
  }
  sprites: {
    regular: string
    shiny: string
    gmax: string
  }
  types: Type[]
  talents: Talent[]
  stats: {
    hp: number
    atk: number
    def: number
    spe_atk: number
    spe_def: number
    vit: number
  }
  resistances: Resistance[]
  evolution: {
    pre: PokemonEvolution[]
    next: PokemonEvolution[]
    mega: PokemonEvolution[]
  }
  height: string
  weight: string
  egg_groups: string[]
  sexe: {
    male: number
    female: number
  }
  catch_rate: number
  level_100: number
  forme: string
}

interface Resistance {
  name: string
  multiplier: number
}
interface stat {
    name: string
    value: number
    }
    
interface PokemonEvolution {
  pokedexId: number
  name: string
  condition: string
}

interface Talent {
  name: string
  tc: boolean
}

interface Type {
  name: string
  image: string
}
