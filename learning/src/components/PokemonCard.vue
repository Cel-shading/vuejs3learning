<script setup lang="ts">
import type Pokemon from '@/models/Pokemon'
import { useCollectionStore } from '@/stores/collection'
import { onClickOutside } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import ChartStats from './ChartStats.vue'

defineProps<{
  data: Pokemon
}>()
const menuPosition = ref({ x: 0, y: 0 })
const collectionStore = useCollectionStore()
const { addPokemonToCollection } = collectionStore
const { ...collections } = storeToRefs(collectionStore)

const addSelectedPokemon = (pokemonData: Pokemon, event: MouseEvent) => {
  console.log(pokemonData.name.fr)
  selectedPokemon.value = pokemonData
  openMenu.value = true

  onClickOutside(menu, () => {
    openMenu.value = false
  })

  menuPosition.value = {
    x: event.pageX,
    y: event.pageY,
  }
}

const openMenu = ref<boolean>(false)
const menu = ref(null as any)

const selectedPokemon = ref<Pokemon>()
</script>

<template>
  <div
    class="flex flex-col w-60 items-center p-5 border-solid hover:border-dotted border-4 border-black rounded-md cursor-pointer"
    @click.stop="addSelectedPokemon(data, $event)"
  >
    <h1>{{ data.name.fr }}</h1>
    <img class="w-60" :src="data.sprites.regular" :alt="data.name.fr" />
    <h3>Statistics</h3>
    <ChartStats :data="data" />
  </div>
  <div
    class="z-50 absolute w-40 text-center bg-white border border-black rounded-md"
    v-if="openMenu"
    ref="menu"
    :style="{ top: `${menuPosition.y}px`, left: `${menuPosition.x}px` }"
  >
    <div v-if="collections.collections.value.length === 0">
      <p>You don't have any collection yet</p>
    </div>
    <div v-if="collections.collections.value.length > 0">
      <p>Add it to a collection</p>
      <div v-for="collection in collections.collections.value" :key="collection.id">
        <div>
          <span
            class="menu-element cursor-pointer hover:bg-gray-200"
            @click="addPokemonToCollection(collection.id, selectedPokemon as Pokemon)"
          >
            {{ collection.name }}
          </span>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.pokemon-card {
  @apply flex flex-col items-center cursor-pointer;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
