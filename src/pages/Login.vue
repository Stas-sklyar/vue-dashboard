<template>
  <a-card
    title="Login"
    class="login-container"
  >
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <a-input
          v-model:value.lazy="email"
          type="email"
          id="email"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <a-input
          v-model:value.lazy="password"
          type="password"
          id="password"
          required
        />
      </div>

      <a-button
        type="primary"
        @click.prevent="login"
      >
        Login
      </a-button>
    </form>
  </a-card>
</template>

<script setup>
  import { ref } from 'vue'

  const email = ref('')
  const password = ref('')

  const login = () => {
    console.log(`Login attempt with email: ${email.value} and password: ${password.value}`)
  }
</script>

<style scoped>
  .login-container {
    width: 400px;
    margin: 0 auto;
  }

  .form-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
</style>

<style>
  .ant-card-head-title {
    text-align: center;
    font-weight: bold;
    font-size: 24px;
  }
</style>