
<template>
  <ul>
    <li>
      <router-link to="/">Home</router-link>
    </li>
    <li>
      <router-link to="/collection">Collection</router-link>
    </li>
  </ul>
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
    color: var(--color-secondary);
  }
</style>
