<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue'
import PokemonFilter from '@/components/PokemonFilter.vue'
import type Pokemon from '@/models/Pokemon'
import { usePokemonStore } from '@/stores/pokemon'
import { storeToRefs } from 'pinia'
import { onBeforeMount, watch } from 'vue'

const pokemonStore = usePokemonStore()
const { loading, error, getPokemon, filteredPokemon } = storeToRefs(pokemonStore)
const { setFilteredPokemon } = pokemonStore

onBeforeMount(() => {
  watch(
    getPokemon,
    (newVal: Pokemon[]) => {
      if (newVal) {
        setFilteredPokemon(newVal as Pokemon[])
      }
    },
    { immediate: true as boolean }
  )
})

console.log(getPokemon, filteredPokemon)
</script>

<template>
  <main>
    <p class="gradient-text mt-5">Welcome to the <span class="font-bold">Pokédex</span>!</p>
    <PokemonFilter />
    <!-- in flex zone where the card cannot be shorter than the image-->
    <div class="pokemon-list">
      <span v-for="pokemon in filteredPokemon" :key="(pokemon as Pokemon).pokedexId">
        <span v-if="(pokemon as Pokemon).pokedexId > 0">
          <PokemonCard :data="pokemon" />
        </span>
      </span>
    </div>
  </main>
</template>

<style scoped>
.pokemon-list {
  @apply flex flex-wrap justify-center gap-4;
}
</style>
