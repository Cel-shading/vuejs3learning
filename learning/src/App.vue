<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  
 
  <RouterView />
</template>

<style scoped>
main {
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
</style>
