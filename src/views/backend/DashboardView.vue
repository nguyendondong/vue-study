<script setup >
import SideBarView from '@/components/backend/layout/SideBarView.vue'
</script>

<template>
  <div class="bg-[#f8f8f8] w-full h-screen">
    <div class="sidebar">
      <SideBarView/>
    </div>
    <div id="wrapper-content" class="text-sm text-gray-700 py-1 ml-64 mx-auto p-1">
      <router-view/>
    </div>
  </div>
</template>