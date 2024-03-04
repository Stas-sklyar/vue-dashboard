<template>
  <a-list
    class="courses"
    item-layout="vertical"
    size="middle"
    :pagination="loaderIsActive || !pagination ? false : pagination"
    :data-source="courses"
    :loading="loaderIsActive"
  >
    <template #renderItem="{ item }">
      <a-list-item :key="item.id" class="courses__item course">
        <template #actions>
          <div>
            <a-rate v-model:value="item.rating" allow-half disabled />
            <span class="ant-rate-text">({{ item.amountOfReviews }})</span>
          </div>

          <span>
            <component :is="UserOutlined" style="margin-right: 8px" />
            {{ item.amountOfLearners }}
          </span>
        </template>

        <template #extra>
          <img
            class="course__image"
            alt="logo"
            src="https://files.oaiusercontent.com/file-H0x7mxdNQG7VExfHQIaMV6tj?se=2024-02-28T10%3A33%3A41Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3Dae3f9141-fbe9-4548-b8cf-23f5b76c1383.webp&sig=aaSLJIJ6PKdy%2BA4IsG%2BxiLccRyiZtinrINVcy9lalFE%3D"
          />
        </template>

        <a-list-item-meta :description="item.description" :title="item.title"></a-list-item-meta>

        <div v-if="progressIsVisible" class="course__progress">
          <a-progress :percent="item.progress" />
        </div>

        <RouterLink :to="'/course/' + item.id">
          <a-button type="primary">Go to Course</a-button>
        </RouterLink>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup>
import { UserOutlined } from '@ant-design/icons-vue'

const { courses, loaderIsActive, pagination, progressIsVisible } = defineProps({
  courses: {
    type: Array,
    required: true
  },
  loaderIsActive: {
    type: Boolean,
    required: true
  },
  pagination: {
    type: [Object, Boolean],
    required: true
  },
  progressIsVisible: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.courses {
  padding: 15px 0;

  &__item {
    margin-bottom: 10px;
  }
}

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

  &__progress {
    max-width: 300px;
    padding: 5px 0;
  }
}
</style>
