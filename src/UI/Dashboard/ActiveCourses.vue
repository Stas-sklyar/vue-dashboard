<template>
  <CoursesList
    :courses="courses"
    :loader-is-active="loaderIsActive"
    :pagination="pagination"
    :progress-is-visible="true"
  />
</template>

<script setup>
import CoursesList from '@/UI/shared/CoursesList.vue'
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'

const props = defineProps({
  activeCourses: Array
})

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