<template>
  <div class="page-wrapper">
    <a-card>
      <video width="100%" controls>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </a-card>

    <a-card>
      <div class="title-wrapper">
        <h1 class="title-wrapper__title">
          {{ lesson.title }}
        </h1>

        <small> {{ lesson.duration }} min </small>
      </div>

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

    <div class="buttons-wrapper">
      <RouterLink
        @click="openLink"
        :to="'/lesson/' + lesson.previousLessonId">
        <a-button type="primary">Previous lesson</a-button>
      </RouterLink>

      <a-button type="primary">Mark as completed</a-button>

      <RouterLink
        @click="openLink"
        :to="'/lesson/' + lesson.nextLessonId">
        <a-button type="primary">Next lesson</a-button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
  import {ref} from "vue";

  const lesson = ref({
    title: 'Introduction of Vue.js',
    duration: 10,
    completed: true,
    id: 0,
    description: 'Lorores ea eligensanh? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aperiam asperiores assumenda atque consectetur cupiditate debitis dolore doloribus enim esse et exercitationem expedita facilis fuga fugit illo illum ipsum laudantium magnam magni maiores maxime officiis omnis pariatur provident quae, quasi quia quis quo quod repellat sed unde vitae voluptas voluptates voluptatum. Ab accusamus assumenda, aut deleniti, dignissimos impedit ipsum nesciunt nostrum obcaecati officia quam, quo. Adipisci commodi dolorem doloribus eos eveniet ex necessitatibus neque, nobis perspiciatis placeat quaerat tempora velit? Adipisci dignissimos dolore dolorum exercitationem fugiat iure odit quae quaerat sit vero! Aliquid dolore eligendi eum nulla possimus quaerat saepe, tempore! Amet, architecto aspernatur doloremque dolores ea eligendi error est illum iure nisi officiis, possimus ullam vitae? Aut exercitationem, incidunt. Corporis deserunt expedita, magnam minima natus reiciendis vel! Assumenda beatae consequuntur error est expedita impedit nisi, non obcaecati odio quas. Dolorem inventore ipsum itaque magni nobis possimus tempora tempore voluptatum. A alias architecto commodi dolor doloremque dolorum eius error eum facilis fuga, fugit labore laborum maiores mollitia neque omnis praesentium provident, quas quos reiciendis reprehenderit tenetur ut! Id illo laboriosam maxime optio ratione. A accusamus alias, asperiores at autem corporis delectus deleniti dicta distinctio ea eaque earum est fuga hic impedit ipsa laudantium, libero magnam molestias necessitatibus nobis nostrum odio omnis praesentium quo recusandae reiciendis rem soluta ut veritatis? Animi assumenda quo vel! Autem dolorem dolores exercitationem fugiat ipsum placeat, sapiente totam. Ab ad consequatur itaque iure, modi nihil perspiciatis porro quae quibusdam veritatis! Aut facere ipsam iste labore mollitia nesciunt rem repellat soluta tempora ut! Accusamus aliquam hic qui sint! Cumque dignissimos minus optio quas suscipit? Ad aliquid atque delectus dicta dolor dolore eos est exercitationem explicabo illum iure labore laudantium neque possimus, quae quas qui rem tenetur voluptas voluptatibus! Eaque et, harum quam quibusdam quidem repellendus sint?',
    goals: [
      { title: 'Understand Vue.js', completed: true, id: 0 },
      { title: 'Understand Vue CLI', completed: true, id: 1 },
      { title: 'Understand Vue Router', completed: true, id: 2 },
      { title: 'Understand Vuex', completed: true, id: 3 },
      { title: 'Understand Vue 3', completed: false, id: 4 }
    ],
    nextLessonId: 1,
    previousLessonId: 2
  })

  const openLink = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>

<style scoped>
  .page-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .title-wrapper {
    display: flex;
    gap: 20px;
    align-items: flex-end;
    margin-bottom: 20px;
  }

  .title-wrapper__title {
    margin: 0;
    line-height: 100%;
  }

  .buttons-wrapper {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
</style>