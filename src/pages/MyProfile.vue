<template>
  <a-row>
    <a-col :span="12">
      <UserInfo />
    </a-col>

    <a-col :span="12"> </a-col>
  </a-row>
</template>

<script>
  import { defineComponent } from 'vue'
  import UserInfo from '@/UI/MyProfile/UserInfo.vue'

  export default defineComponent({
    components: { UserInfo }
  })
</script>

<style lang="scss" scoped></style>