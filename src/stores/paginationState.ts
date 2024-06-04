import { ref, watch } from 'vue'
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
    perPage: 10
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

  const setCurrentPage = (pageNumber: number, perPage: number) => {
    page.value.currentPage = pageNumber ?? page.value.currentPage
    page.value.perPage = perPage ?? page.value.perPage
  }


  const setUrl = (url: string) => {
    urlInfo.value = url
  }

  watch([() => page.value.currentPage, () => page.value.perPage], async () => {
    await getPaginationData()
  })

  return {
    getPaginationData, setCurrentPage, currentData, page, setUrl
  }
})