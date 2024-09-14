<script setup lang="ts">
import { useUserState } from '@/stores/userState.ts'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const userState = useUserState()
const errors = ref({} as any)

onMounted(async () => {
  try {
    const data = route.path.split('/')
    const [method, token] = data.slice(2)
    await userState.verify(method, token)
  } catch (error: any) {
    errors.value = error.data.errors
  }
})

</script>

<template>
  <div>Đang xác thực ...</div>
</template>

<style scoped>

</style>