import type Pokemon from '@/models/Pokemon'
import { ref } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'
import { computedAsync } from '@vueuse/core'

export const usePokemonStore = defineStore('pokemon', () => {
  const loading = ref(false)
  const error = ref<null | Error>(null)

  const getPokemon = computedAsync(async () => {
    try {
      loading.value = true
      const response = await axios.get('https://tyradex.vercel.app/api/v1/pokemon')
      return response.data as Pokemon[]
    } catch (error) {
      error.value = error
    } finally {
      loading.value = false
    }
  }, [])

  const filteredPokemon = ref<Pokemon[]>(getPokemon.value ? [...getPokemon.value] : [])

  const setFilteredPokemon = (value: Pokemon[]) => {
    filteredPokemon.value = value // Update the filtered list, not the original list
  }

  return { loading, error, getPokemon, filteredPokemon, setFilteredPokemon }
})
