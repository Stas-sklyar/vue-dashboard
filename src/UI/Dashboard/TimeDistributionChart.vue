<template>
  <Chart :type="'pie'" :data="chartData" :options="options" />
</template>

<script setup>
import Chart from '@/UI/shared/Chart.vue'

const chartData = {
  labels: ['Course A', 'Course B', 'Course C', 'Course D'],
  datasets: [
    {
      data: [10, 20, 30, 40],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}
</script>
