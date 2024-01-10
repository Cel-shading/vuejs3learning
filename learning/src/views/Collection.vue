<script setup lang="ts">
import { useCollectionStore } from '@/stores/collection'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'
import CollectionCreation from '@/components/CollectionCreation.vue'
import Collection from '@/models/Collection'

const collectionStore = useCollectionStore()
const { addPokemon, removePokemonFromCollection, addCollection } = collectionStore
const { ...collection } = storeToRefs(collectionStore)
const newCollectionName = ref<string>('')
const selectedCollection = ref<Collection>()
console.log(collection)
</script>

<template>
  <h1>Collections</h1>
  <CollectionCreation />
  <main>
    <div class="collection-list">
      <span v-for="element in collection" :key="element.id">
        <div class="tooltip">
          <button @click="selectedCollection = element">{{ element.name }}</button>
          <span class="tooltiptext">{{ element.description }}</span>
        </div>
      </span>
    </div>
    <!-- <div class="pokemon-list">
      <span v-for="pokemon in selectedCollection" :key="pokemon.pokedexId">
        <span v-if="pokemon.pokedexId > 0">
          <PokemonCard :data="pokemon" />
          <button @click="removePokemonFromCollection(pokemon.pokedexId)">Remove</button>
        </span>
      </span>
    </div> -->
  </main>
</template>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}
.collection-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
}
.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
}
</style>
