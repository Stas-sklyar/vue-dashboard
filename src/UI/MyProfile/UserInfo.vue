<template>
  <a-card class="form" title="User Info">
    <form>
      <div class="form__avatar-wrapper avatar-wrapper">
        <a-avatar :size="120">
          <template #icon><UserOutlined /></template>
        </a-avatar>

        <a-upload
          v-model:file-list="fileList"
          name="file"
          :headers="headers"
          @change="handleChange"
        >
          <a-button>
            <upload-outlined></upload-outlined>
            Click to Update
          </a-button>
        </a-upload>
      </div>

      <a-form-item label="Username">
        <a-input v-model="name" placeholder="Username" />
      </a-form-item>

      <a-form-item label="Email">
        <a-input :value="email" disabled />
      </a-form-item>

      <a-form-item label="Speciality">
        <a-select v-model="speciality">
          <a-select-option value="frontend">Frontend</a-select-option>
          <a-select-option value="backend">Backend</a-select-option>
          <a-select-option value="fullstack">Fullstack</a-select-option>
          <a-select-option value="devops">DevOps</a-select-option>
          <a-select-option value="qa">QA</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" @click="updateProfile"> Update </a-button>
      </a-form-item>
    </form>
  </a-card>
</template>

<script setup>
import { ref } from 'vue'
import { message } from 'ant-design-vue'
import { UploadOutlined } from '@ant-design/icons-vue'
import { UserOutlined } from '@ant-design/icons-vue'

const name = ref('John Doe')
const email = ref('stas.sklyar.dev@gmail.com')
const speciality = ref('')
const fileList = ref([])

const handleChange = (info) => {
  if (info.file.status !== 'uploading') {
    console.log(info.file, info.fileList)
  }
  if (info.file.status === 'done') {
    message.success(`${info.file.name} file uploaded successfully`)
  } else if (info.file.status === 'error') {
    message.error(`${info.file.name} file upload failed.`)
  }
}

const headers = {}

const updateProfile = () => {
  console.log(name, email, speciality)
}
</script>

<style lang="scss">
.ant-form-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & .ant-form-item-control {
    width: 100%;
  }
}

.form {
  &__avatar-wrapper {
    margin-bottom: 20px;
  }
}

.avatar-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
