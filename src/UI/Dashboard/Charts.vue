<template>
  <div class="charts">
    <a-card :bordered="false">
      <EngagementAnalyticsChart />
    </a-card>

    <a-card :bordered="false">
      <TimeDistributionChart />
    </a-card>
  </div>
</template>

<script setup>
import TimeDistributionChart from '@/UI/Dashboard/TimeDistributionChart.vue'
import EngagementAnalyticsChart from '@/UI/Dashboard/EngagementAnalyticsChart.vue'
</script>

<style scoped>
.charts {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>

<style>
.charts .ant-card {
  width: 100%;
  max-width: calc(50% - 10px);
}

.charts .ant-card {
  width: 100%;
  max-width: calc(50% - 10px);
}
</style>
