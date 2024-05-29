<script setup lang="ts">
const emit = defineEmits(
  ['close']
)
</script>

<template>
  <button type="button"
          class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          @click="emit('close')"> Enable Modal
  </button>
</template>
