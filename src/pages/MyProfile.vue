<template>
  <a-row :gutter="20">
    <a-col :span="12">
      <UserInfo />
    </a-col>

    <a-col :span="12">
      <Courses />
    </a-col>
  </a-row>

  <a-row :gutter="20">
    <a-col :span="12">
      <ChangePassword />
    </a-col>

    <a-col :span="12"> </a-col>
  </a-row>
</template>

<script>
import { defineComponent } from 'vue'
import UserInfo from '@/UI/MyProfile/UserInfo.vue'
import ChangePassword from '@/UI/MyProfile/ChangePassword.vue'
import Courses from '@/pages/Courses.vue'

export default defineComponent({
  components: { Courses, ChangePassword, UserInfo }
})
</script>

<style lang="scss" scoped></style>
