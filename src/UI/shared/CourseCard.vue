<template>
  <a-list-item :key="course.id" class="courses__item">
    <template #actions>
      <div>
        <a-rate v-model:value="course.rating" allow-half disabled />
        <span class="ant-rate-text">({{ course.amountOfReviews }})</span>
      </div>

      <span>
        <component :is="UserOutlined" style="margin-right: 8px" />
        {{ course.amountOfLearners }}
      </span>
    </template>

    <template #extra>
      <img
        class="course__image"
        alt="logo"
        src="https://files.oaiusercontent.com/file-H0x7mxdNQG7VExfHQIaMV6tj?se=2024-02-28T10%3A33%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dae3f9141-fbe9-4548-b8cf-23f5b76c1383.webp&sig=aaSLJIJ6PKdy%2BA4IsG%2BxiLccRyiZtinrINVcy9lalFE%3D"
      />
    </template>

    <a-list-item-metacourse
      :description="course.description"
      :title="course.title"
    ></a-list-item-metacourse>

    <RouterLink :to="'/course/' + course.id">
      <a-button type="primary">Go to Course</a-button>
    </RouterLink>
  </a-list-item>
</template>

<script setup>
import { UserOutlined } from '@ant-design/icons-vue'

const { course } = defineProps({
  course: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.course {
  background-color: #ffffff;

  &__image {
    width: 100%;
    max-width: 180px;
    height: auto;
  }

  &:last-child {
    margin-bottom: 0;
  }
}
</style>
