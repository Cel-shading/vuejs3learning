<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue'
import { usePokemonStore } from '@/stores/pokemon';
import { storeToRefs } from 'pinia';


const pokemonStore = usePokemonStore()
const { loading, error, getPokemon } = storeToRefs(pokemonStore)
console.log(loading, error, getPokemon)

</script>

<template>
  <h1 class="greetings">Welcome to the <span class="highlight">Pokédex</span>!</h1>
  <main>
    <!-- in flex zone where the card cannot be shorter than the image-->
    <div class="pokemon-list">
      <span v-for="pokemon in getPokemon" :key="pokemon.pokedexId">
        <span v-if="pokemon.pokedexId>0">
          <PokemonCard :data="pokemon" />
        </span>
      </span>
    </div>
  </main>
</template>

<style scoped>
/* les carte sont regroupées 3 par 3 */
.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
}

  
</style>
