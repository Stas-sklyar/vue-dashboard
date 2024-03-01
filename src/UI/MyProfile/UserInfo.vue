<template>
  <a-card
    class="form"
    title="User Info"
  >
    <form>
      <a-form-item label="Username">
        <a-input
          v-model="name"
          placeholder="Username"
        />
      </a-form-item>

      <a-form-item label="Email">
        <a-input
          :value="email"
          disabled
        />
      </a-form-item>

      <a-form-item label="Speciality">
        <a-select v-model="speciality">
          <a-select-option value="frontend">Frontend</a-select-option>
          <a-select-option value="backend">Backend</a-select-option>
          <a-select-option value="fullstack">Fullstack</a-select-option>
          <a-select-option value="devops">DevOps</a-select-option>
          <a-select-option value="qa">QA</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item>
        <a-button
          type="primary"
          @click="updateProfile"
        >
          Update
        </a-button>
      </a-form-item>
    </form>
  </a-card>
</template>

<script setup>
  import {ref} from "vue";

  const name = ref("John Doe")
  const email = ref("stas.sklyar.dev@gmail.com")
  const speciality = ref("")

  const updateProfile = () => {
    console.log(name, email, speciality)
  }
</script>

<style lang="scss">
  .ant-form-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & .ant-form-item-control {
      width: 100%;
    }
  }
</style>