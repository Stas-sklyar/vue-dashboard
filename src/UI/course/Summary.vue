<template>
  <h3>Summary of the course:</h3>

  <ul>
    <li
      v-for="goal in goals"
      :key="goal.id"
    >
      {{ goal.title }}
    </li>
  </ul>
</template>

<script setup>
  const { goals } = defineProps({
    goals : Array
  })
</script>