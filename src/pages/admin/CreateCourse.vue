<template>
  <a-card title="Create Course" class="title-center">
    <a-form :label-col="{ span: 2 }" :wrapper-col="{ span: 22 }">
      <a-form-item label="Course Name">
        <a-input placeholder="Enter course name"></a-input>
      </a-form-item>

      <a-form-item label="Description">
        <a-textarea placeholder="Enter course description" row="4"></a-textarea>
      </a-form-item>

      <a-form-item label="Key Items">
        <a-select :options="[]" :open="false" mode="tags" placeholder="Please select"></a-select>
      </a-form-item>

      <a-space
        v-for="(lesson, index) in dynamicValidateForm.lessons"
        :key="lesson.id"
        style="display: flex; margin-bottom: 8px"
        align="baseline"
      >
        <a-form-item :name="['lessons', index, 'title']">
          <a-input v-model:value="lesson.first" placeholder="Title" />
        </a-form-item>

        <a-form-item :name="['lessons', index, 'description']">
          <a-input v-model:value="lesson.last" placeholder="Description" />
        </a-form-item>

        <a-form-item :name="['lessons', index, 'video']">
          <a-upload list-type="video">
            <a-button>
              <template #icon><UploadOutlined /></template>
              Click to upload
            </a-button>
          </a-upload>
        </a-form-item>

        <MinusCircleOutlined @click="removeLesson(lesson)" />
      </a-space>

      <a-form-item>
        <a-button type="dashed" block @click="addLesson">
          <PlusOutlined />
          Add lesson
        </a-button>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script setup>
import { MinusCircleOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons-vue'
import { reactive } from 'vue'

const dynamicValidateForm = reactive({
  lessons: []
})
const removeLesson = (item) => {
  const index = dynamicValidateForm.lessons.indexOf(item)

  if (index !== -1) {
    dynamicValidateForm.lessons.splice(index, 1)
  }
}
const addLesson = () => {
  dynamicValidateForm.lessons.push({
    title: '',
    description: '',
    id: Date.now(),
    video: ''
  })
}
</script>

<style lang="scss" scoped></style>