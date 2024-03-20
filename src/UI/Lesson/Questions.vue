<template>
  <a-card>
    <h3>Questions</h3>
    <AddQuestionForm @add-question="onAddQuestion" :submitting="submitting" />

    <a-list item-layout="horizontal" :dataSource="questions" :loading="loaderIsActive">
      <template #loadMore>
        <div v-if="!initLoading && !loaderIsActive" class="load-more">
          <a-button @click="onLoadMore">loading more</a-button>
          <a-spin v-if="loadMoreLoaderIsActive" />
        </div>
      </template>

      <Question v-for="question in questions" :key="question.id" :question="question" />
    </a-list>
  </a-card>
</template>

<script setup>
import Question from '@/UI/Lesson/Question.vue'
import {onMounted, ref} from 'vue'
import AddQuestionForm from '@/UI/Lesson/AddQuestionForm.vue'
import {useStore} from "vuex";

const { lessonId } = defineProps({
  lessonId: {
    type: Number,
    required: true
  }
})

const questions = ref([])
const store = useStore()
const loaderIsActive = ref(true)
const initLoading = ref(true)
const loadMoreLoaderIsActive = ref(false)
const submitting = ref(false)

const onLoadMore = () => {
  loadMoreLoaderIsActive.value = true

  setTimeout(() => {
    questions.value = [...questions.value, ...questions.value]
    loadMoreLoaderIsActive.value = false
  }, 300)
}

const onAddQuestion = async (question) => {
  submitting.value = true
  await store.dispatch('createQuestion', { question })
  submitting.value = false
}

onMounted(async () => {
  try {
    await store.dispatch('fetchSelectedLessonQuestions', { lessonId })
    questions.value = store.state.selectedLessonQuestions
  } catch (e) {
    console.error(e)
  } finally {
    loaderIsActive.value = false
    initLoading.value = false
  }
})
</script>
