<template>
  <div class="sticky top-0 z-30 flex justify-center p-5 mb-4 bg-white shadow-md w-full">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/collection">Collection</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  padding: 0;
}

li {
  font-size: 1.2rem;
}

a {
  text-decoration: none;
  color: var(--color-text);
}

a:hover {
  @apply bg-slate-200;
}
</style>
