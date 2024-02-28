<template>
  <a-row
    class="row"
    :gutter="20"
    v-if="course.active"
  >
    <a-col :span="12">
      <TimeSpentChart />
    </a-col>

    <a-col :span="12">
      <Progress />
    </a-col>
  </a-row>
</template>

<script setup>
  import TimeSpentChart from "@/UI/course/TimeSpentChart.vue"
  import Progress from "@/UI/course/Progress.vue"

  const { course } = defineProps({
    course: {
      type: Object,
      required: true
    }
  })
</script>

<style scoped>
  .row .ant-card {
    height: 100%;
  }
</style>