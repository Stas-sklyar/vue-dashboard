<template>
  <a-card class="forgot-password title-center" title="Forgot Password">
    <form>
      <div class="forgot-password__form-group form-group">
        <label for="email">Email</label>
        <a-input v-model="email" type="email" id="email" required placeholder="Enter your email" />
      </div>

      <a-button
        class="forgot-password__button button"
        type="primary"
        @click.prevent="forgotPassword"
      >
        Send Reset Password Link
      </a-button>
    </form>
  </a-card>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const forgotPassword = () => {
  console.log(email.value)
}
</script>

<style lang="scss" scoped>
.forgot-password {
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
