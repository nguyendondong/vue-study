<script setup lang="ts">
import SideBarView from '@/components/backend/layout/SideBarView.vue'
import { useUserState } from '@/stores/userState'
import ModalView from '@/components/backend/layout/ModalView.vue'
import { ref } from 'vue'

const userState = useUserState()
const email = !userState.user
  ? JSON.parse(localStorage.getItem('user') ?? '').email
  : userState.user?.email

const open = ref(false)

const toggleShow = () => {
  open.value = !open.value
}
</script>

<template>
  <div class="bg-[#f8f8f8] w-full h-screen">
    <div class="sidebar">
      <SideBarView :email="email" />
    </div>
    <div id="wrapper-content" class="text-sm text-gray-700 py-1 ml-64 mx-auto p-1">
      <ModalView :show="open" @close="toggleShow" />
      <RouterView @close="toggleShow" />
    </div>
  </div>
</template>
<script></script>
