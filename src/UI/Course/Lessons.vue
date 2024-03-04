<template>
  <h2>Lessons</h2>

  <div class="lessons">
    <label class="lessons__item" v-for="lesson in props.lessons" :key="lesson.id">
      <a-checkbox type="checkbox" :checked="lesson.completed" readonly @change.stop />

      <RouterLink :to="'/Lesson/' + lesson.id">
        {{ lesson.title }} - {{ lesson.duration }} minutes
      </RouterLink>
    </label>
  </div>
</template>

<script setup>
const props = defineProps({
  lessons: Array
})
</script>

<style scoped>
.lessons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.lessons__item {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
