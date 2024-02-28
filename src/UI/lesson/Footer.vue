<template>
  <div class="buttons-wrapper">
    <RouterLink
      :to="'/lesson/' + lesson.previousLessonId">
      <a-button type="primary">Previous lesson</a-button>
    </RouterLink>

    <a-button type="primary">Mark as completed</a-button>

    <RouterLink
      :to="'/lesson/' + lesson.nextLessonId">
      <a-button type="primary">Next lesson</a-button>
    </RouterLink>
  </div>
</template>

<script setup>
  const { lesson } = defineProps({
    lesson: Object
  })
</script>

<style lang="scss" scoped>
  .buttons-wrapper {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
</style>