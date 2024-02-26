<template>
  <Header />

  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import Header from "@/UI/shared/Header.vue"
</script>

<style scoped>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 15px;
  }
</style>
