<script setup lang="ts">
import { useUserState } from '@/stores/userState.ts'

const emit = defineEmits(
  ['close']
)
const userState = useUserState()
</script>

<template>

  <button type="button"
          class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          @click="emit('close')"> Enable Modal
  </button>
  <div> {{ userState.isLoggedIn }}</div>
</template>
