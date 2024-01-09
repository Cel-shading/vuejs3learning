<script setup lang="ts">
import Pokemon from '@models/pokemon'

defineProps<{
  data: Pokemon
}>()
</script>

<template>
  <div class="pokemon-card">
    <h1>{{ data.name.fr }}</h1>
    <img :src="data.sprites.regular" :alt="data.name" />
    <h3>Statistics</h3>
    {{ data.stats  }}
  </div>
</template>

<style scoped>
.pokemon-card {
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
