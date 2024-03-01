<template>
  <div class="filter-container">
    <a-input-search
      v-model:value="searchQuery"
      enter-button
      placeholder="Search for courses"
      :disabled="loaderIsActive"
    />

    <a-select
      class="sort-select"
      v-model:value="sortKey"
      placeholder="Sort by"
      :disabled="loderIsActive"
    >
      <a-select-option value="rating" defa>Sort by Rating</a-select-option>
      <a-select-option value="amountOfLearners">Sort by Number of Learners</a-select-option>
    </a-select>
  </div>

  <a-list
    class="courses"
    item-layout="vertical"
    size="middle"
    :pagination="loaderIsActive ? false : pagination"
    :data-source="filteredCourses"
    :loading="loaderIsActive"
  >
    <template #renderItem="{ item }">
      <a-list-item
        :key="item.id"
        class="courses__item course"
      >
        <template #actions>
          <div>
            <a-rate
              v-model:value="item.rating"
              allow-half
              disabled
            />
            <span class="ant-rate-text">({{ item.amountOfReviews }})</span>
          </div>

          <span>
            <component
              :is="UserOutlined"
              style="margin-right: 8px"
            />
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

        <a-list-item-meta
          :description="item.description"
          :title="item.title"
        ></a-list-item-meta>

        <RouterLink :to="'/Course/' + item.id">
          <a-button type="primary">Go to Course</a-button>
        </RouterLink>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup>
  import {MessageOutlined, UserOutlined} from '@ant-design/icons-vue'
  import {computed, onMounted, ref} from "vue"
  import {useStore} from "vuex";

  const store = useStore()
  const courses = ref([])
  const searchQuery = ref('')
  const sortKey = ref('rating')
  const loaderIsActive = ref(true)

  const sortCourses = (a, b) => {
    if (sortKey.value === 'rating') {
      return b.rating - a.rating
    } else if (sortKey.value === 'amountOfLearners') {
      return b.amountOfLearners - a.amountOfLearners
    }
    return 0
  }

  const filteredCourses = computed(() => {
    let coursesFiltered = courses.value.filter(course => {
      return (
        course.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    })
    return coursesFiltered.sort(sortCourses)
  })

  const pagination = {
    onChange: () => {
      window.scrollTo({top: 0, behavior: 'smooth'})
    },
    pageSize: 4
  }

  onMounted(async () => {
    try {
      await store.dispatch('fetchCourses')
      courses.value = store.state.courses
    } catch (e) {
      console.error(e)
    } finally {
      loaderIsActive.value = false
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
  }

  .filter-container {
    display: flex;
    gap: 30px;
  }

  .sort-select {
    width: 400px;
  }
</style>