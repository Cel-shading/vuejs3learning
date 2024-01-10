<script setup lang="ts">
import type Collection from '@/models/Collection'
import { useCollectionStore } from '@/stores/collection'
import { ref } from 'vue'

const collectionStore = useCollectionStore()

const { addCollection } = collectionStore
const name = ref('')
const description = ref('')

const getMaxId = (collection: Collection[]) => {
  let maxId = 0
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id > maxId) {
      maxId = collection[i].id
    }
  }
  return maxId as number
}
const newCollection = ref<Collection>({
  id: getMaxId(collectionStore.collections) + 1,
  name: '',
  description: '',
  pokemons: []
})

const submitForm = () => {
  newCollection.value.description = description.value
  newCollection.value.name = name.value
  addCollection(newCollection.value)
  name.value = ''
  description.value = ''
  console.log(collectionStore.collections)
}
</script>

<template>
  <h2>Create a new collection</h2>
  <form @submit.prevent="submitForm()">
    <label for="collectionName">Collection name</label>
    <input type="text" id="collectionName" v-model="name" required />
    <label for="collectionDescription">Description</label>
    <textarea type="text" v-model="description" id="collectionDescription"> </textarea>
    <button type="submit">Create</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
