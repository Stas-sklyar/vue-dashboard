<template>
  <a-card class="title-center" title="Change Password">
    <form>
      <a-form-item label="Old password">
        <a-input v-model="oldPassword" placeholder="Enter old password" />
      </a-form-item>

      <a-form-item label="New Password">
        <a-input :value="newPassword" placeholder="Enter new password" />
      </a-form-item>

      <a-form-item label="Repeat New Password">
        <a-input :value="repeatNewPassword" placeholder="Repeat new password" />
      </a-form-item>

      <a-form-item>
        <a-button type="primary" @click="changePassword"> Change Password </a-button>
      </a-form-item>
    </form>
  </a-card>
</template>

<script setup>
import { ref } from 'vue'

const oldPassword = ref('')
const newPassword = ref('')
const repeatNewPassword = ref('')
const changePassword = () => {
  console.log('changePassword')
}
</script>
