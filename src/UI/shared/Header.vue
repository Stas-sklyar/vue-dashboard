<template>
  <header>
    <nav>
      <RouterLink to="/">Dashboard</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/registration">Registration</RouterLink>
    </nav>
  </header>
</template>

<script setup>

  import {RouterLink} from "vue-router"

</script>

<style scoped>
  header {
    background-color: #ffffff;
    padding: 20px;
  }

  nav {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  a:hover {
    text-decoration: underline;
  }
</style>