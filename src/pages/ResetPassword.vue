<template>
  <a-card class="reset-password title-center" title="Reset Password">
    <form>
      <div class="reset-password__form-group form-group">
        <label for="password">Password</label>
        <a-input
          v-model="password"
          type="password"
          id="password"
          required
          placeholder="Enter new password"
          v-autofocus
        />
      </div>

      <div class="reset-password__form-group form-group">
        <label for="password">Repeat Password</label>
        <a-input
          v-model="repeatPassword"
          type="password"
          id="password"
          required
          placeholder="Repeat new password"
        />
      </div>

      <a-button class="reset-password__button button" type="primary" @click.prevent="resetPassword">
        Reset Password
      </a-button>
    </form>
  </a-card>
</template>

<script setup>
import { ref } from 'vue'

const password = ref('')
const repeatPassword = ref('')

const resetPassword = () => {
  console.log(password.value, repeatPassword.value)
}
</script>

<style lang="scss" scoped>
.reset-password {
  width: 400px;
  margin: 0 auto;

  &__form-group {
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
</style>
