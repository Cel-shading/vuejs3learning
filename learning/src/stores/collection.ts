import type Pokemon from '@/models/Pokemon'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type Collection from '@/models/Collection'

export const useCollectionStore = defineStore('collection', () => {
  const collections = ref<Collection[]>([])

  const addCollection = (newCollection: Collection) => {
    collections.value.push(newCollection)
  }

  const addPokemonToCollection = (collectionIndex: number, pokemon: Pokemon) => {
    if (collectionIndex >= 0 && collectionIndex < collections.value.length) {
      collections.value[collectionIndex].pokemon.push(pokemon)
    }
  }

  const removePokemonFromCollection = (collectionIndex: number, pokemonIndex: number) => {
    if (collectionIndex >= 0 && collectionIndex < collections.value.length) {
      collections.value[collectionIndex].pokemon.splice(pokemonIndex, 1)
    }
  }

  return { collections, addCollection, addPokemonToCollection, removePokemonFromCollection }
})
