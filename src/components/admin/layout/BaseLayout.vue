<script setup lang="ts">
import SideBarView from '@/components/admin/layout/SideBarView.vue'
import ModalView from '@/components/admin/layout/ModalView.vue'
import BreadcrumbDefault from '@/components/admin/Breadcrumbs/BreadcrumbDefault.vue'
import { ref } from 'vue'

const modelState = ref<{
  title: string
  description: string
  confirm: string
  cancel: string
}>()

</script>
<template>
  <div class="bg-[#f8f8f8] flex h-screen overflow-hidden">
    <SideBarView />
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <ModalView :model-state={modelState} />
      <main>
        <div class="mx-auto px-4">
          <BreadcrumbDefault />
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
