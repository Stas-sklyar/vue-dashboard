<template>
  <div class="container">
    <Metrics :metrics="metrics" />
    <Charts :activeCourses="activeCourses" />
    <ActiveCourses :activeCourses="activeCourses" />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import Metrics from "@/UI/dashboard/Metrics.vue"
  import Charts from "@/UI/dashboard/Charts.vue"
  import ActiveCourses from "@/UI/dashboard/ActiveCourses.vue"

  const metrics = ref([
    {
      title: 'Active courses',
      value: 4,
      id: 1
    },
    {
      title: 'Completed courses',
      value: 1,
      id: 2
    },
    {
      title: 'Time spent (hours)',
      value: 87,
      id: 3
    },
    {
      title: 'Average hours per day',
      value: 2.5,
      id: 4
    }
  ])
  const activeCourses = ref([
    {
      title: 'Learn React + Redux',
      progress: 20,
      id: 1
    },
    {
      title: 'Learn Vue + Vuex',
      progress: 86,
      id: 2
    },
    {
      title: 'Learn Angular + NgRx',
      progress: 45,
      id: 3
    },
    {
      title: 'Learn Svelte + SvelteKit',
      progress: 100,
      id: 4
    }
  ])

</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>