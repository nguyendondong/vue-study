<script setup lang="ts">
import { useRoute } from 'vue-router'

const router = useRoute()
</script>

<template>
  <div class="px-4 py-4 bg-white border rounded-lg">
    <nav>
      <ol class="flex items-center gap-2">
        <li>
          <RouterLink class="font-medium" to="/admin/dashboard"> Admin /</RouterLink>
        </li>
        <li class="font-medium text-primary">{{ router.name }}</li>
      </ol>
    </nav>
  </div>
</template>
