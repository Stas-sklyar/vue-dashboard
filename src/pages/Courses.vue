<template>
  <div class="filter-container">
    <a-input-search
      v-model:value="searchQuery"
      enter-button
      placeholder="Search for courses"
    />

    <a-select
      class="sort-select"
      v-model:value="sortKey"
      placeholder="Sort by"
    >
      <a-select-option value="rating" defa>Sort by Rating</a-select-option>
      <a-select-option value="amountOfLearners">Sort by Number of Learners</a-select-option>
    </a-select>
  </div>

  <a-list
    class="courses"
    item-layout="vertical"
    size="middle"
    :pagination="pagination"
    :data-source="filteredCourses"
  >
    <template #renderItem="{ item }">
      <a-list-item
        :key="item.id"
        class="courses__item course"
      >
        <template #actions>
          <a-rate v-model:value="item.rating" allow-half disabled />

          <span>
            <component
              :is="MessageOutlined"
              style="margin-right: 8px"
            />
            {{ item.commentsAmount }}
          </span>

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

        <RouterLink :to="'/course/' + item.id">
          <a-button type="primary">Go to Course</a-button>
        </RouterLink>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup>
  import {StarOutlined, LikeOutlined, MessageOutlined, UserOutlined} from '@ant-design/icons-vue'
  import {computed, ref} from "vue"

  const courses = ref([
    {'id': 1,
    'title': 'Vue.js Course',
    'description': 'A comprehensive guide to Vue.js for beginners...',
    'commentsAmount': 15,
    'rating': 4.5,
    'amountOfLearners': 2425},
    {'id': 2,
      'title': 'React Course',
      'description': 'Learn React library and create interactive UIs...',
      'commentsAmount': 20,
      'rating': 4.7,
      'amountOfLearners': 8417},
    {'id': 3,
      'title': 'JavaScript Basics',
      'description': 'Lay a solid foundation of JavaScript understanding...',
      'commentsAmount': 25,
      'rating': 4.3,
      'amountOfLearners': 1041},
    {'id': 4,
      'title': 'Angular Development',
      'description': 'Build dynamic web applications with Angular...',
      'commentsAmount': 18,
      'rating': 4.6,
      'amountOfLearners': 5818},
    {'id': 5,
      'title': 'Learning Python',
      'description': 'Become proficient in Python and its popular libraries...',
      'commentsAmount': 30,
      'rating': 4.8,
      'amountOfLearners': 4314},
    {'id': 6,
      'title': 'Node.js Course',
      'description': 'Develop server-side applications with Node.js...',
      'commentsAmount': 12,
      'rating': 4.2,
      'amountOfLearners': 3653},
    {'id': 7,
      'title': 'HTML & CSS Basics',
      'description': 'Learn to create web pages from scratch...',
      'commentsAmount': 17,
      'rating': 4.0,
      'amountOfLearners': 8753},
    {'id': 8,
      'title': 'Advanced CSS and Sass',
      'description': 'Elevate your web design skills...',
      'commentsAmount': 22,
      'rating': 4.9,
      'amountOfLearners': 5836},
    {'id': 9,
      'title': 'Introduction to TypeScript',
      'description': 'Discover how to use TypeScript in web development...',
      'commentsAmount': 10,
      'rating': 4.1,
      'amountOfLearners': 6900},
    {'id': 10,
      'title': 'Flutter Development',
      'description': 'Create cross-platform applications with Flutter...',
      'commentsAmount': 28,
      'rating': 4.7,
      'amountOfLearners': 4479},
    {'id': 11,
      'title': 'SQL Course',
      'description': 'Master the skills of working with SQL databases...',
      'commentsAmount': 14,
      'rating': 4.4,
      'amountOfLearners': 5206},
    {'id': 12,
      'title': 'Web Application Security',
      'description': 'Learn the best practices for securing web applications...',
      'commentsAmount': 19,
      'rating': 4.5,
      'amountOfLearners': 875}
  ])
  const searchQuery = ref('')
  const sortKey = ref('rating')

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
    border-radius: 8px;

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