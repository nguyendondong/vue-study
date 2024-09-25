<script setup lang="ts">
import { useUserState } from '@/stores/userState.ts'
import { useModalState } from '@/stores/modalState.ts'

const modalState = useModalState()
const userState = useUserState()

const onOpenModal = () => {
  modalState.setDataModal({
    title: 'Modal Title 11111',
    description: '2222Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.',
    confirm: 'Confirm3333',
    cancel: '444Cancel'
  })
  modalState.toggleModal()
}


</script>

<template>

  <button type="button"
          class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          @click="onOpenModal"> Enable Modal
  </button>
  <div> {{ userState.isLoggedIn }}</div>
</template>
