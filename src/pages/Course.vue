<template>
  <div class="container" v-if="!loaderIsActive">
    <Content :course="course" />
    <Activity v-if="course.active" :course="course" />
  </div>

  <a-spin v-else size="large" />
</template>

<script setup>
  import { onMounted, ref } from 'vue'
  import Content from '@/UI/Course/Content.vue'
  import Activity from '@/UI/Course/Activity.vue'
  import { useStore } from 'vuex'
  import { useRoute } from 'vue-router'

  const store = useStore()
  const $route = useRoute()
  const loaderIsActive = ref(true)
  const course = ref(null)

  onMounted(async () => {
    try {
      await store.dispatch('fetchCourseDetails', $route.params.id)
      course.value = store.state.selectedCourse
    } catch (e) {
      console.error(e)
    } finally {
      loaderIsActive.value = false
    }
  })
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
