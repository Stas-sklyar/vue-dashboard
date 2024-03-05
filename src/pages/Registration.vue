<template>
  <a-card class="registration title-center" title="Registration">
    <form>
      <div class="registration__form-group form-group">
        <label for="email">Email</label>
        <a-input v-model="email" type="email" id="email" required v-autofocus />
      </div>

      <div class="registration__form-group form-group">
        <label for="password">Password</label>
        <a-input v-model="password" type="password" id="password" required />
      </div>

      <div class="registration__form-group form-group">
        <label for="password">Repeat Password</label>
        <a-input v-model="repeatPassword" type="password" id="password" required />
      </div>

      <a-button class="registration__button button" type="primary" @click="registration">
        Registration
      </a-button>
    </form>

    <div class="registration__links registration-links">
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/forgot-password">Forgot Password</RouterLink>
    </div>
  </a-card>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const repeatPassword = ref('')

const registration = () => {
  console.log(`Login attempt with email: ${email.value} and password: ${password.value}`)
}
</script>

<style lang="scss">
.registration {
  width: 400px;
  margin: 0 auto;

  &__form-group {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
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

.registration-links {
  display: flex;
  justify-content: space-between;
}
</style>
