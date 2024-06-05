import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import type { Page } from '@/utils/DefineType.ts'
import axios from '@/config/axios.ts'

export const usePagination = defineStore('pagination', () => {
  const page = ref<Page>({
    currentPage: 1,
    nextPage: 0,
    prevPage: 0,
    lastPage: 0,
    total: 0,
    perPage: 8
  })
  const currentData = ref<any[]>([])
  const urlInfo = ref('')

  const getPaginationData = async () => {
    try {
      const urlData = `${urlInfo.value}?page=${page.value.currentPage}&limit=${page.value.perPage}`
      const response = await axios.get(urlData)
      setPageData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const setPageData = (data: any) => {
    page.value = data
    currentData.value = data.data
  }

  const UpdatePageData = (pageNumber: number, perPage: number) => {
    page.value.currentPage = pageNumber ?? page.value.currentPage
    page.value.perPage = perPage ?? page.value.perPage
  }


  const pagesToShow = computed(() => {
    const range = 5
    const start = Math.max(page.value.currentPage - range, 1)
    const end = Math.min(page.value.currentPage + range, page.value.lastPage)

    const pages = []
    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    return pages
  })


  const setUrl = (url: string) => {
    urlInfo.value = url
  }

  watch([() => page.value.currentPage, () => page.value.perPage], async () => {
    UpdatePageData(page.value.currentPage, page.value.perPage)
    await getPaginationData()
  })

  return {
    getPaginationData, UpdatePageData, currentData, page, setUrl, pagesToShow
  }
})