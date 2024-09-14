<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PaginationView from '@/components/admin/pagination/PaginationView.vue'
import { usePagination } from '@/stores/paginationState.ts'
import { useModalState } from '@/stores/modalState.ts'

const paginationState = usePagination()
const columns = ref(['ID', 'Name', 'Description'])
const modalState = useModalState()

const onOpenModal = () => {
  modalState.setDataModal({
    title: 'Modal Title 11111',
    description: '2222Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.',
    confirm: 'Confirm3333',
    cancel: '444Cancel'
  })
  modalState.toggleModal()
}

onMounted(async () => {
  paginationState.setUrl('/category')
  await paginationState.getPaginationData()
})
</script>

<template>
  <!-- component -->
  <section class="mx-auto pt-4 flex justify-end gap-4">
    <button type="button"
            class="w- shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-red-600 hover:bg-red-700 focus:outline-none"
            @click="onOpenModal"> Create Category

    </button>
  </section>

  <section class="mx-auto pt-4 flex justify-end gap-4">
    <RouterLink type="button"
                class="w- shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-red-600 hover:bg-red-700 focus:outline-none"
                to="/admin/categories/create"> Create

    </RouterLink>
  </section>

  <section class="mx-auto pt-4">
    <div class="flex flex-col">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col"
                    class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    v-for="column in columns" :key="column">
                  <div class="flex items-center gap-x-3" v-if="column === 'ID'">
                    <input type="checkbox"
                           class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700">
                    <button class="flex items-center gap-x-2">
                      <span>{{ column }}</span>

                      <svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                          fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                        <path
                          d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                          fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                        <path
                          d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                          fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                      </svg>
                    </button>
                  </div>
                  <span v-else>{{ column }}</span>
                </th>

                <th scope="col" class="relative py-3.5 px-4">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
              <tr v-for="category in paginationState.currentData" :key="category.id">
                <td class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                  <div class="inline-flex items-center gap-x-3">
                    <input type="checkbox"
                           class="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700">

                    <span>#{{ category.id }}</span>
                  </div>
                </td>
                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{{ category.name }}
                </td>
                <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                  <div
                    class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <h2 class="text-sm font-normal">{{ category.description }}</h2>
                  </div>
                </td>
                <td class="px-4 py-4 text-sm whitespace-nowrap">
                  <div class="flex items-center gap-x-6">
                    <button
                      class="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                      Archive
                    </button>

                    <button
                      class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none">
                      Download
                    </button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <PaginationView />
  </section>
  <RouterView />
</template>