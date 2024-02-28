<template>
  <div class="container">
    <Content :course="course" />

    <Activity
      v-if="course.active"
      :course="course"
    />
  </div>
</template>

<script setup>
  import {ref} from "vue"
  import Content from "@/UI/course/Content.vue"
  import Activity from "@/UI/course/Activity.vue";

  const course = ref({
    title: 'Vue.js + Vuex',
    active: true,
    poster: 'https://files.oaiusercontent.com/file-KaCVdO655NwyyZIaxcNWwvf2?se=2024-02-28T10%3A48%3A37Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D749643c0-4951-4644-90a5-933b1421bdeb.webp&sig=IMdvd1lV4VauirN2bHLXcQQdWfaeIhWGKgQStcvw9qY%3D',
    duration: 42,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio earum exercitationem ipsa labore natus pariatur, voluptatibus. Aliquid deserunt eveniet fugit hic, illum magnam quasi sapiente tempore voluptatem voluptatibus! Consectetur deleniti nisi recusandae, sapiente sint sit voluptas voluptates! Aspernatur autem cum dignissimos est exercitationem expedita facilis itaque, iusto laboriosam magni maxime nisi obcaecati odio placeat quam quia quisquam quos reprehenderit sapiente temporibus totam vel voluptatibus. Aliquid assumenda, atque consequatur culpa cupiditate, ducimus iusto nesciunt pariatur praesentium recusandae repudiandae voluptatum! Consectetur dolore dolorum excepturi nam quaerat qui, tempora veniam. Dignissimos harum natus nobis odit. Aliquam asperiores, delectus dignissimos, hic, impedit in incidunt ipsa ipsam itaque mollitia officiis qui quia recusandae! Accusamus alias aspernatur assumenda consectetur dicta, eius fuga harum impedit itaque neque odit pariatur perferendis voluptate. Cumque deleniti dolore earum eligendi esse facere magni voluptatem? Consequatur itaque perferendis quibusdam! Asperiores ex exercitationem facere hic, id similique? A ab accusamus aperiam, architecto at cupiditate delectus distinctio, dolores eos est exercitationem illum ipsum maxime minus nostrum numquam, odio odit quasi qui quibusdam recusandae sequi sunt suscipit ullam voluptatibus? Ad adipisci alias aliquam asperiores atque commodi consectetur cupiditate dignissimos dolorem enim eos, error est facere harum id ipsa iusto laborum nam obcaecati optio placeat porro possimus praesentium quod repellendus repudiandae sapiente soluta tenetur velit voluptate. A accusantium adipisci, amet at aut beatae cupiditate hic illum molestias mollitia, nulla officia perspiciatis placeat porro possimus praesentium provident quis reiciendis reprehenderit sed sequi, suscipit veritatis! Autem cum deleniti deserunt ducimus fugit, hic, illo impedit, magni molestiae nihil provident quas recusandae similique soluta voluptatem.',
    lessons: [
      { title: 'Introduction of Vue.js', duration: 30, completed: true, id: 0 },
      { title: 'Vue CLI', duration: 35, completed: true, id: 1 },
      { title: 'Vue Router', duration: 60, completed: true, id: 2 },
      { title: 'Vuex', duration: 45, completed: true, id: 3 },
      { title: 'Vue 3', duration: 30, completed: false, id: 4 }
    ],
    goals: [
      { title: 'Understand Vue.js', completed: true, id: 0 },
      { title: 'Understand Vue CLI', completed: true, id: 1 },
      { title: 'Understand Vue Router', completed: true, id: 2 },
      { title: 'Understand Vuex', completed: true, id: 3 },
      { title: 'Understand Vue 3', completed: false, id: 4 }
    ],
  })
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>