<template>
  <a-card title="Reviews" class="title-center">
    <a-list item-layout="horizontal" :dataSource="reviews" :loading="loaderIsActive">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :title="item.name" :description="item.review">
            <template #avatar><a-avatar :src="item.avatar" /></template>
          </a-list-item-meta>

          <a-rate :value="item.rating" disabled />
        </a-list-item>
      </template>
    </a-list>
  </a-card>
</template>

<script setup>
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'

const { courseId } = defineProps({
  courseId: {
    type: String,
    required: true
  }
})

const store = useStore()
const reviews = ref([])
const loaderIsActive = ref(true)

onMounted(async () => {
  try {
    await store.dispatch('fetchSelectedCourseReviews', { userId: courseId })
    reviews.value = store.state.selectedCourseReviews
  } catch (e) {
    console.error(e)
  } finally {
    loaderIsActive.value = false
  }
})
</script>
