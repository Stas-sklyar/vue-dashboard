<template>
  <a-row :gutter="20">
    <a-col :span="12">
      <UserInfo />
    </a-col>

    <a-col :span="12">
      <ChangePassword />
    </a-col>
  </a-row>
</template>

<script>
import { defineComponent } from 'vue'
import UserInfo from '@/UI/MyProfile/UserInfo.vue'
import ChangePassword from '@/UI/MyProfile/ChangePassword.vue'

export default defineComponent({
  components: { ChangePassword, UserInfo }
})
</script>

<style lang="scss" scoped></style>