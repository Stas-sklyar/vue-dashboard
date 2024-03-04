<template>
  <a-card>
    <img class="course-poster img-fluid" :src="course.poster" :alt="course.title" />

    <div class="title-wrapper">
      <h1 class="title-wrapper__title">
        {{ course.title }}
      </h1>

      <span> {{ course.duration }} hours </span>
    </div>

    <h3>Status: {{ course.completed ? 'Completed ✅' : 'In progress 🕒' }}</h3>

    <Summary :goals="course.goals" />

    <p>{{ course.description }}</p>

    <Lessons :lessons="course.lessons" />
  </a-card>
</template>

<script setup>
import Summary from '@/UI/Course/Summary.vue'
import Lessons from '@/UI/Course/Lessons.vue'

const { course } = defineProps({
  course: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.course-poster {
  width: 100%;
  height: 320px;
  object-fit: cover;
  margin-bottom: 20px;
}

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
