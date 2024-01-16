import type Pokemon from '@/models/Pokemon'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type Collection from '@/models/Collection'
import { useStorage } from '@vueuse/core'

export const useCollectionStore = defineStore('collection', () => {
  const collections = useStorage<Collection[]>('collections', [])

  const addCollection = (newCollection: Collection) => {
    collections.value.push(newCollection)
  }

  const removeCollection = (collectionId: number) => {
    collections.value = collections.value.filter((collection) => collection.id !== collectionId)
  }

  const addPokemonToCollection = (collectionId: number, pokemon: Pokemon) => {
    const collectionIndex = findCollectionIndexById(collectionId)
    if (collectionIndex >= 0 && collectionIndex < collections.value.length) {
      collections.value[collectionIndex].pokemon.push(pokemon)
    }
  }

  const removePokemonFromCollection = (collectionId: number, pokemonId: number) => {
    const collectionIndex = findCollectionIndexById(collectionId)
    const pokemonIndex = collections.value[collectionIndex].pokemon.findIndex(
      (pokemon) => pokemon.pokedexId === pokemonId
    )
    console.log(collectionIndex, pokemonIndex)
    if (collectionIndex >= 0 && collectionIndex < collections.value.length) {
      collections.value[collectionIndex].pokemon.splice(pokemonIndex, 1)
    }
  }

  const findCollectionIndexById = (collectionId: number) => {
    return collections.value.findIndex((collection) => collection.id === collectionId) as number
  }

  return {
    collections,
    addCollection,
    addPokemonToCollection,
    removePokemonFromCollection,
    removeCollection
  }
})
