<template>
  <a-card title="Reviews" class="title-center">
    <a-list item-layout="horizontal" :dataSource="reviews" :loading="loaderIsActive">
      <template #loadMore>
        <div v-if="!initLoading && !loaderIsActive" class="load-more">
          <a-button @click="onLoadMore">loading more</a-button>
          <a-spin v-if="loadMoreLoaderIsActive" />
        </div>
      </template>

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
const initLoading = ref(true)
const loadMoreLoaderIsActive = ref(false)

const onLoadMore = () => {
  loadMoreLoaderIsActive.value = true

  setTimeout(() => {
    reviews.value = [...reviews.value, ...reviews.value]
    loadMoreLoaderIsActive.value = false
  }, 300)
}

onMounted(async () => {
  try {
    await store.dispatch('fetchSelectedCourseReviews', { courseId })
    reviews.value = store.state.selectedCourseReviews
  } catch (e) {
    console.error(e)
  } finally {
    loaderIsActive.value = false
    initLoading.value = false
  }
})
</script>