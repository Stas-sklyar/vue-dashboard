<template>
  <a-comment :author="question.author" :content="question.content">
    <template #avatar>
      <a-avatar :src="question.avatar" :alt="question.author" />
    </template>
  </a-comment>
</template>

<script setup>
const { question } = defineProps({
  question: { type: Object, required: true }
})
</script>

<style lang="scss" scoped></style>
