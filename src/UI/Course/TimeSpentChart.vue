<template>
  <a-card>
    <h2 class="title">Hours Spent for Lessons</h2>

    <Chart :type="'bar'" :data="chartData" :options="{}" />
  </a-card>
</template>

<script setup>
import Chart from '@/UI/shared/Chart.vue'

const chartData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
  datasets: [
    {
      label: 'Hours Spent for Lessons',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
      hoverBorderColor: 'rgba(255, 99, 132, 1)',
      data: [3, 2, 2, 0, 5, 3, 4, 2, 3, 1, 4, 2, 0, 3, 2, 1, 3, 4, 0, 2, 4, 3, 5]
    }
  ]
}
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
}
</style>
