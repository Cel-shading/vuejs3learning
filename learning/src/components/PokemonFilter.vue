<script setup lang="ts">
import type Pokemon from '@/models/Pokemon';
import { usePokemonStore } from '@/stores/pokemon'
import { storeToRefs } from 'pinia';
import { ref } from 'vue'

const pokemonStore = usePokemonStore()
const { filteredPokemon, getPokemon } = storeToRefs(pokemonStore)
const name = ref('')

const filterPokemon = () => {
    pokemonStore.$patch(() => {
        if (name.value === '') {
            filteredPokemon.value = getPokemon.value
            return
        }
        filteredPokemon.value = getPokemon.value?.filter((pokemon: Pokemon) => pokemon.name.fr.toLowerCase().includes(name.value.toLowerCase()))
    })
    console.log(filteredPokemon.value)
}


</script>

<template>
  <div class="flex">
    <input class="search-bar flex-1 w-90 m-5" type="text" v-model="name" placeholder="Search for a pokemon" />
    <button class="search-bar-button  " @click="filterPokemon()">Search</button>
  </div>
</template>

<style scoped>
.search-bar {
  @apply w-2 h-10 px-3 text-base placeholder-gray-600 border rounded-lg;
}
</style>
