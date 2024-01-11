<script setup lang="ts">
import { useCollectionStore } from '@/stores/collection'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'
import CollectionCreation from '@/components/CollectionCreation.vue'
import type Collection from '@/models/Collection'

const collectionStore = useCollectionStore()
const { removePokemonFromCollection, addCollection, removeCollection } = collectionStore
const { ...collections } = storeToRefs(collectionStore)
const newCollectionName = ref<string>('')
const selectedCollection = ref<Collection>()

const deletePokemon = (collectionId: number, pokemonId: number) => {
  removePokemonFromCollection(collectionId, pokemonId)
  console.log('delete pokemon id: ' + pokemonId + ' from collection id: ' + collectionId)
}

const removeSelectedCollection = (id: number) => {
  removeCollection(id-1)
}

console.log(collections.collections.value)
</script>

<template>
  <h1>Collections</h1>
  <CollectionCreation />
  <main>
    <div class="collection-list">
      <span v-for="collection in collections.collections.value" :key="collection.id">
        <div>
          <span @click="selectedCollection = collection">
            {{ collection.name }}
          </span>
        </div>
        <button @click="removeSelectedCollection(collection.id-1)">Remove</button>
      </span>
    </div>
    <div class="pokemon-list">
      <span v-for="pokemon in selectedCollection?.pokemon" :key="pokemon.pokedexId">
        <span v-if="pokemon.pokedexId>0">
          <PokemonCard :data="pokemon"/>
          <button @click="selectedCollection && deletePokemon(selectedCollection.id, pokemon.pokedexId)">Remove</button>
        </span>
      </span>
    </div>
  </main>
</template>

<style scoped>

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
