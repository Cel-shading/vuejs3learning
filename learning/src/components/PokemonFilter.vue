<script setup lang="ts">
import type Pokemon from '@/models/Pokemon'
import { usePokemonStore } from '@/stores/pokemon'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const pokemonStore = usePokemonStore()
const { filteredPokemon, getPokemon } = storeToRefs(pokemonStore)
const { setFilteredPokemon } = pokemonStore
const name = ref('')

const filterPokemon = () => {
  pokemonStore.$patch(() => {
    if (name.value === '') {
      setFilteredPokemon(getPokemon.value as Pokemon[])
      return
    }
    setFilteredPokemon(
      getPokemon.value?.filter((pokemon: Pokemon) =>
        pokemon.name.fr.toLowerCase().includes(name.value.toLowerCase())
      ) || []
    )
  })
}
</script>

<template>
  <div class="flex">
    <input
      @keyup.enter="filterPokemon()"
      class="search-bar flex-1 w-90 mb-5 mt-5 mr-1"
      type="text"
      v-model="name"
      placeholder="Search for a pokemon"
    />
    <button class="search-bar-button border rounded-md mt-5 mb-5 p-1 hover:bg-slate-200" @click="filterPokemon()">Search</button>
  </div>
</template>

<style scoped>
.search-bar {
  @apply w-2 h-10 px-3 text-base placeholder-gray-600 border rounded-lg;
}
</style>
