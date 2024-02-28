<template>
  <div class="cards">
    <a-card
      v-for="metric in props.metrics"
      class="card"
      :title="metric.title"
      :bordered="false"
      :key="metric.id"
    >
      <div>{{ metric.value }}</div>
    </a-card>
  </div>
</template>

<script setup>
  import {defineProps} from "vue"

  const props = defineProps({
    metrics: Array
  })
</script>

<style scoped>
  .cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .cards .card {
    width: 100%;
    text-align: center;
  }
</style>

<style>
  .cards .card .ant-card-head-title {
    font-size: 18px;
  }

  .cards .card .ant-card-body {
    font-size: 36px;
    font-weight: bold;
    padding: 10px;
  }
</style>