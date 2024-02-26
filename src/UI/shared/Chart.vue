<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
  import { Chart, registerables } from 'chart.js'
  import {defineProps, onMounted, ref} from "vue"

  const props = defineProps({
    type: String,
    data: Object,
    options: Object
  })

  Chart.register(...registerables)

  const canvas = ref(null)

  onMounted(() => {
    new Chart(canvas.value.getContext('2d'), {
      type: props.type,
      data: props.data,
      options: props.options
    })
  })
</script>