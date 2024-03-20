<template>
  <div v-if="!loaderIsActive" class="page-wrapper">
    <Video />
    <Content :lesson="lesson" />
    <Questions :lessonId="lesson.id" />
  </div>

  <a-spin v-else size="large" />
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Video from '@/UI/Lesson/Video.vue'
import Content from '@/UI/Lesson/Content.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import Questions from '@/UI/Lesson/Questions.vue'

const store = useStore()
const $route = useRoute()
const loaderIsActive = ref(true)
const lesson = ref()

onMounted(async () => {
  try {
    await store.dispatch('fetchLessonDetails', $route.params.id)
    lesson.value = store.state.selectedLesson
  } catch (e) {
    console.error(e)
  } finally {
    loaderIsActive.value = false
  }
})
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
