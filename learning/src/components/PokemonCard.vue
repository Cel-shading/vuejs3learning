<script setup lang="ts">
import { useCollectionStore } from '@/stores/collection';
import Pokemon from '@models/pokemon'
import { onClickOutside } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

defineProps<{
  data: Pokemon
}>()

const collectionStore = useCollectionStore()
const { addPokemonToCollection } = collectionStore 
const { ...collections } = storeToRefs(collectionStore)

const addSelectedPokemon = (pokemonData: Pokemon) => {
  console.log(pokemonData.name.fr)
  selectedPokemon.value = pokemonData
  openMenu.value = true

  onClickOutside(menu, () => {
    openMenu.value = false
  })

}

const openMenu = ref<boolean>(false)
const menu = ref<HTMLElement>()

const selectedPokemon = ref<Pokemon>()

</script>


<template>
  <div class="pokemon-card" @click.stop="addSelectedPokemon(data)">
    <h1>{{ data.name.fr }}</h1>
    <img :src="data.sprites.regular" :alt="data.name" />
    <h3>Statistics</h3>
    {{ data.stats  }}
  </div>
  <div v-if="openMenu" ref="menu">
    <h3>Adding a pokemon</h3>
    <div v-for="collection in collections.collections.value" :key="collection.id">
      <div>
        <span class= menu-element @click="addPokemonToCollection(collection.id, selectedPokemon)">
          {{ collection.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-element {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--color-primary);
  color: var(--color-text);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
}
.pokemon-card {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--color-primary);
  color: var(--color-text);
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
