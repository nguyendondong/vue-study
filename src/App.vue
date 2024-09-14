<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { type IStaticMethods } from 'preline/preline'
import { useUserState } from '@/stores/userState.ts'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}
const userState = useUserState()

onMounted(() => {
  userState.availableAccessToken()
  
  setTimeout(() => {
    window.HSStaticMethods.autoInit()
  }, 100)
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
