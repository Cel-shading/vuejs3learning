<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const pokemons = ref([])

onMounted(async () => {
  const response = await axios.get('https://tyradex.vercel.app/api/v1/pokemon')
  pokemons.value = response.data
})

</script>

<template>
  <h1 class="greetings">Welcome to the <span class="highlight">Pokédex</span>!</h1>
  <main>
    <li v-for="pokemon in pokemons">
      <PokemonCard :data="pokemon" />
    </li>
  </main>
</template>
