<template>
  <a-card>
    <h3>Questions</h3>
    <AddQuestionForm @add-question="onAddQuestion" />
    <Question v-for="question in questions" :key="question.id" :question="question" />
  </a-card>
</template>

<script setup>
import Question from '@/UI/Lesson/Question.vue'
import { ref } from 'vue'
import AddQuestionForm from '@/UI/Lesson/AddQuestionForm.vue'

const questions = ref([
  {
    id: 1,
    content: 'This is a question',
    author: 'John Doe',
    avatar: 'https://randomuser.me/api/portraits',
    replies: []
  },
  {
    id: 2,
    content: 'This is another question',
    author: 'Amy Smith',
    avatar: 'https://randomuser.me/api/portraits',
    replies: []
  }
])

const onAddQuestion = (question) => {
  questions.value.unshift(question)
}
</script>
