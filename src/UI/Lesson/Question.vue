<template>
  <a-comment :author="question.author" :content="question.content">
    <template #avatar>
      <a-avatar :src="question.avatar" :alt="question.author" />
    </template>

    <a-comment v-for="reply in question.replies" :author="reply.author" :content="reply.content" :key="reply.id">
      <template #avatar>
        <a-avatar :src="reply.avatar" :alt="reply.author" />
      </template>
    </a-comment>
  </a-comment>
</template>

<script setup>
const { question } = defineProps({
  question: { type: Object, required: true }
})
</script>

<style lang="scss" scoped></style>
