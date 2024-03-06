<template>
  <a-form>
    <a-form-item>
      <a-textarea
        v-model:value="question"
        :rows="4"
        :rules="[{ required: true, message: 'Please input your question!' }]"
        :disabled="props.submitting"
      />
    </a-form-item>

    <a-button :loading="props.submitting" type="primary" @click="handleSubmit">
      Add Question</a-button
    >
  </a-form>
</template>

<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['add-question'])
const props = defineProps({
  submitting: {
    type: Boolean,
    default: false,
    required: true
  }
})

const question = ref('')

const handleSubmit = () => {
  emit('add-question', {
    id: 1,
    content: question.value,
    author: 'Stas Skliar',
    avatar: 'https://randomuser.me/api/portraits',
    replies: []
  })
}

watch(props, (props) => {
  if (!props.submitting) {
    question.value = ''
  }
})
</script>
