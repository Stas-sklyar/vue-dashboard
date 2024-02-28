<template>
  <a-card>
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

      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
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