<template>
  <div class="course-page">
    <h1>{{ course.title }}</h1>
    <p>{{ course.description }}</p>

    <section>
      <h1>Lessons</h1>

      <ul>
        <li v-for="(lesson, index) in course.lessons" :key="index">
          {{ lesson.title }} - {{ lesson.duration }} минут
        </li>
      </ul>
    </section>

    <section class="progress">
      <h1>Progress</h1>
      <a-progress type="circle" :percent="94" />
      <a-button type="primary">Continue Learning</a-button>
    </section>
  </div>
</template>

<script setup>
  import {ref} from "vue"

  const course = ref({
    title: 'Vue.js + Vuex',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio earum exercitationem ipsa labore natus pariatur, voluptatibus. Aliquid deserunt eveniet fugit hic, illum magnam quasi sapiente tempore voluptatem voluptatibus! Consectetur deleniti nisi recusandae, sapiente sint sit voluptas voluptates! Aspernatur autem cum dignissimos est exercitationem expedita facilis itaque, iusto laboriosam magni maxime nisi obcaecati odio placeat quam quia quisquam quos reprehenderit sapiente temporibus totam vel voluptatibus. Aliquid assumenda, atque consequatur culpa cupiditate, ducimus iusto nesciunt pariatur praesentium recusandae repudiandae voluptatum! Consectetur dolore dolorum excepturi nam quaerat qui, tempora veniam. Dignissimos harum natus nobis odit. Aliquam asperiores, delectus dignissimos, hic, impedit in incidunt ipsa ipsam itaque mollitia officiis qui quia recusandae! Accusamus alias aspernatur assumenda consectetur dicta, eius fuga harum impedit itaque neque odit pariatur perferendis voluptate. Cumque deleniti dolore earum eligendi esse facere magni voluptatem? Consequatur itaque perferendis quibusdam! Asperiores ex exercitationem facere hic, id similique? A ab accusamus aperiam, architecto at cupiditate delectus distinctio, dolores eos est exercitationem illum ipsum maxime minus nostrum numquam, odio odit quasi qui quibusdam recusandae sequi sunt suscipit ullam voluptatibus? Ad adipisci alias aliquam asperiores atque commodi consectetur cupiditate dignissimos dolorem enim eos, error est facere harum id ipsa iusto laborum nam obcaecati optio placeat porro possimus praesentium quod repellendus repudiandae sapiente soluta tenetur velit voluptate. A accusantium adipisci, amet at aut beatae cupiditate hic illum molestias mollitia, nulla officia perspiciatis placeat porro possimus praesentium provident quis reiciendis reprehenderit sed sequi, suscipit veritatis! Autem cum deleniti deserunt ducimus fugit, hic, illo impedit, magni molestiae nihil provident quas recusandae similique soluta voluptatem.',
      lessons: [
      { title: 'Introduction of Vue.js', duration: 30 },
      { title: 'Vue CLI', duration: 35 },
      { title: 'Vue Router', duration: 60 },
      { title: 'Vuex', duration: 45 },
      { title: 'Vue 3', duration: 30 }
    ]
  })
</script>

<style scoped>
  .progress {
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }
</style>