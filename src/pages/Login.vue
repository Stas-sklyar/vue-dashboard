<template>
  <a-card title="Login" class="login title-center">
    <form @submit.prevent="login">
      <div class="login__form-group form-group">
        <label for="email">Email</label>
        <a-input v-model="email" type="email" id="email" required v-autofocus />
      </div>

      <div class="login__form-group form-group">
        <label for="password">Password</label>
        <a-input v-model="password" type="password" id="password" required />
      </div>

      <a-button class="login__button button" type="primary" @click="login">Login</a-button>
    </form>

    <div class="login__links login-links">
      <RouterLink to="/registration">Registration</RouterLink>
      <RouterLink to="/forgot-password">Forgot Password</RouterLink>
    </div>
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

<style lang="scss" scoped>
.login {
  width: 400px;
  margin: 0 auto;

  &__form-group {
    margin-bottom: 20px;
  }

  &__button {
    margin-bottom: 20px;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.button {
  width: 100%;
}

.login-links {
  display: flex;
  justify-content: space-between;
}
</style>
