<template>
  <a-card>
    <div class="title-wrapper">
      <h1 class="title-wrapper__title">
        {{ lesson.title }}
      </h1>

      <span> {{ lesson.duration }} min </span>
    </div>

    <h3>Status: {{ lesson.completed ? 'Completed ✅' : 'In progress 🕒' }}</h3>

    <h3>Summary of the lesson:</h3>
    <ul>
      <li
        v-for="goal in lesson.goals"
        :key="goal.id"
      >
        {{ goal.title }}
      </li>
    </ul>

    <p>{{ lesson.description }}</p>
  </a-card>
</template>

<script setup>
  const { lesson } = defineProps({
    lesson: Object
  })
</script>

<style lang="scss" scoped>
  .title-wrapper {
    display: flex;
    gap: 20px;
    align-items: flex-end;
    margin-bottom: 10px;

    &__title {
      margin: 0;
      line-height: 100%;
    }
  }
</style>