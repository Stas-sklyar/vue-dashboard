<template>
  <div class="active-courses">
    <a-card
      v-for="course in props.activeCourses"
      class="active-courses__item course"
      :title="course.title"
      :bordered="false"
      :key="course.id"
    >
      <p>My progress</p>
      <a-progress :percent="course.progress" />
      <RouterLink :to="'/course/' + course.id">
        <a-button>Go to course</a-button>
      </RouterLink>
    </a-card>
  </div>
</template>

<script setup>
  import {RouterLink} from "vue-router"
  import {defineProps} from "vue"

  const props = defineProps({
    activeCourses: Array,
  })
</script>


<style scoped>
  .active-courses {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }

  .active-courses .active-courses__item {
    width: 100%;
    max-width: calc(50% - 10px)
  }

  .active-courses .ant-card-head-title {
    font-size: 16px;
    font-weight: bold;
  }
</style>

<style>
  .active-courses .ant-card-head-title {
    font-size: 16px;
    font-weight: bold;
  }
</style>