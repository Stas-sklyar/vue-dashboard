<template>
  <div class="container">
    <a-row :gutter="20">
      <a-col :span="12">
        <UserInfo />
      </a-col>

      <a-col :span="12">
        <RecommendedCourses />
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="24">
        <ActiveCourses />
      </a-col>
    </a-row>

    <a-row :gutter="20">
      <a-col :span="12">
        <ChangePassword />
      </a-col>

      <a-col :span="12"></a-col>
    </a-row>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import UserInfo from '@/UI/MyProfile/UserInfo.vue'
import ChangePassword from '@/UI/MyProfile/ChangePassword.vue'
import RecommendedCourses from '@/UI/MyProfile/RecommendedCourses.vue'
import ActiveCourses from '@/UI/MyProfile/ActiveCourses.vue'

export default defineComponent({
  components: { ActiveCourses, RecommendedCourses, ChangePassword, UserInfo }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
