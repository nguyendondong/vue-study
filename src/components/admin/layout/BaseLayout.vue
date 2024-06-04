<script setup lang="ts">
import SideBarView from '@/components/admin/layout/SideBarView.vue'
import { useUserState } from '@/stores/userState'
import ModalView from '@/components/admin/layout/ModalView.vue'
import { ref } from 'vue'
import BreadcrumbDefault from '@/components/admin/Breadcrumbs/BreadcrumbDefault.vue'

const userState = useUserState()
const email = !userState.user
  ? JSON.parse(localStorage.getItem('user') ?? '').email
  : userState.user?.email

const open = ref(false)

const toggleShow = () => {
  open.value = !open.value
}

defineEmits(
  ['close']
)
</script>
<template>
  <div class="bg-[#f8f8f8] flex h-screen overflow-hidden">
    <SideBarView :email="email" />
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <ModalView :show="open" @close="toggleShow" />
      <main>
        <div class="mx-auto max-w-screen-2xl px-4">
          <BreadcrumbDefault />
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
</script>
