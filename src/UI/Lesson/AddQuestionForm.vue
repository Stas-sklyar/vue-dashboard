<template>
  <a-form>
    <a-form-item>
      <a-textarea
        v-model:value="question"
        :rows="4"
        :rules="[{ required: true, message: 'Please input your question!' }]"
      />
    </a-form-item>

    <a-button :loading="submitting" type="primary" @click="handleSubmit"> Add Question </a-button>
  </a-form>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'

const question = ref('')
const submitting = ref(false)
const emit = defineEmits(['add-question'])

const handleSubmit = () => {
  submitting.value = true
  // Simulate a request
  setTimeout(() => {
    submitting.value = false
    emit('add-question', {
      id: 1,
      content: question.value,
      author: 'Stas Skliar',
      avatar: 'https://randomuser.me/api/portraits',
      replies: []
    })
    question.value = ''
  }, 500)
}
</script>
