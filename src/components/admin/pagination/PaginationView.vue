<script setup lang="ts">
import { usePagination } from '@/stores/paginationState.ts'

const pagination = usePagination()

</script>

<template>
  <div class="flex items-center justify-between mt-6">
    <button type="button" v-if="pagination.page.prevPage" @click="() => pagination.page.currentPage = 1"
            class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>

      <span>First Page</span>
    </button>
    <div v-else class="flex items-center px-5 py-2"></div>
    <div class="items-center hidden md:flex gap-x-3">
      <button type="button" v-if="pagination.page.prevPage" @click="() => pagination.page.currentPage -= 1"
              class="px-2 py-1 text-sm rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
        </svg>
      </button>
      <button v-for="page in pagination.pagesToShow" :key="page" type="button"
              @click="() => pagination.page.currentPage = page"
              class="px-2 py-1 text-sm rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              :class=" page === pagination.page.currentPage ? 'bg-blue-100/60 text-blue-600' : 'text-gray-500 dark:text-gray-300 hover:bg-gray-100'">
        {{ page }}
      </button>
      <button type="button" v-if="!pagination.pagesToShow.includes(pagination.page.lastPage)"
              @click="() => pagination.page.currentPage = pagination.page.currentPage += 1"
              class="px-2 py-1 flex items-center text-sm rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100 text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
             stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </button>

    </div>
    <button type="button" v-if="pagination.page.nextPage"
            @click="() => pagination.page.currentPage = pagination.page.lastPage"
            class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
            <span>
                Last Page
            </span>

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
           stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
    </button>
    <div v-else class="flex items-center px-5 py-2"></div>
  </div>

</template>

<style scoped>

</style>