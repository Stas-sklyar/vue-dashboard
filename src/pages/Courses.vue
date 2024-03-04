<template>
  <div class="filter-container">
    <a-input-search
      v-model:value="searchQuery"
      enter-button
      placeholder="Search for courses"
      :disabled="loaderIsActive"
    />

    <a-select
      class="sort-select"
      v-model:value="sortKey"
      placeholder="Sort by"
      :disabled="loderIsActive"
    >
      <a-select-option value="rating" defa>Sort by Rating</a-select-option>
      <a-select-option value="amountOfLearners">Sort by Number of Learners</a-select-option>
    </a-select>
  </div>

  <CoursesList
    :pagination="pagination"
    :loader-is-active="loaderIsActive"
    :courses="filteredCourses"
  />
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import CoursesList from '@/UI/shared/CoursesList.vue'

const store = useStore()
const courses = ref([])
const searchQuery = ref('')
const sortKey = ref('rating')
const loaderIsActive = ref(true)

const sortCourses = (a, b) => {
  if (sortKey.value === 'rating') {
    return b.rating - a.rating
  } else if (sortKey.value === 'amountOfLearners') {
    return b.amountOfLearners - a.amountOfLearners
  }
  return 0
}

const filteredCourses = computed(() => {
  let coursesFiltered = courses.value.filter((course) => {
    return (
      course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  })
  return coursesFiltered.sort(sortCourses)
})

const pagination = {
  onChange: () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  pageSize: 4
}

onMounted(async () => {
  try {
    await store.dispatch('fetchCourses')
    courses.value = store.state.courses
  } catch (e) {
    console.error(e)
  } finally {
    loaderIsActive.value = false
  }
})
</script>

<style lang="scss" scoped>
.filter-container {
  display: flex;
  gap: 30px;
}

.sort-select {
  width: 400px;
}
</style>
