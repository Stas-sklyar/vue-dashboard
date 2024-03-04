<template>
  <Chart :type="'bar'" :data="chartData" :options="options" />
</template>

<script setup>
import Chart from '@/UI/shared/Chart.vue'

const chartData = {
  labels: ['Logins', 'Page Views', 'Tasks Completed'],
  datasets: [
    {
      label: 'User Engagement',
      data: [50, 150, 100],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1
    }
  ]
}

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
</script>
