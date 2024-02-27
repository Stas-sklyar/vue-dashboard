<template>
  <a-card>
    <h2 class="card-title">Progress</h2>
    <div class="progress">
      <a-progress type="circle" :percent="94" />
    </div>
  </a-card>
</template>

<script setup>

</script>

<style scoped>
  .progress {
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }

  .card-title {
    text-align: center;
  }

  .row .ant-card {
    height: 100%;
  }
</style>
