<template>
  <a-card class="title-center" title="Active courses">
    <CoursesList
      :courses="courses"
      :loader-is-active="loaderIsActive"
      :pagination="pagination"
      :progress-is-visible="true"
    />
  </a-card>
</template>

<script setup>
import CoursesList from '@/UI/shared/CoursesList.vue'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
import fetchActiveCourses from '@/store/actions/fetch-active-courses.js'

const store = useStore()
const courses = ref([])
const loaderIsActive = ref(true)

const pagination = {
  onChange: () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  pageSize: 4
}

onMounted(async () => {
  try {
    await store.dispatch('fetchActiveCourses', { userId: store.state.userId })
    courses.value = store.state.activeCourse
  } catch (e) {
    console.error(e)
  } finally {
    loaderIsActive.value = false
  }
})
</script>

<style lang="scss" scoped></style>
