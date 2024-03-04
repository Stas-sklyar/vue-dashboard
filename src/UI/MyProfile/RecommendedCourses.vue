<template>
  <a-card class="title-center" title="Recomended courses">
    <CoursesList :courses="courses" :loader-is-active="loaderIsActive" :pagination="false" />
  </a-card>
</template>

<script setup>
import CoursesList from '@/UI/shared/CoursesList.vue'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'

const store = useStore()
const courses = ref([])
const loaderIsActive = ref(true)

onMounted(async () => {
  try {
    await store.dispatch('fetchRecommendedCourses', { userId: store.state.userId })
    courses.value = store.state.recommendedCourses
  } catch (e) {
    console.error(e)
  } finally {
    loaderIsActive.value = false
  }
})
</script>
