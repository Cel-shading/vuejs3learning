import type Pokemon from './Pokemon'

export default interface Collection {
  id: number
  name: string
  description: string
  pokemon: Pokemon[]
}
