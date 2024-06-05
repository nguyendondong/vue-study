import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalState = defineStore('modalState', () => {
  const isOpen = ref(false)
  const modalData = ref({
    title: '',
    description: '',
    confirm: '',
    cancel: ''
  })
  const toggleModal = () => {
    isOpen.value = !isOpen.value
  }

  const setDataModal = (data: any) => {
    modalData.value.title = data.title
    modalData.value.description = data.description
    modalData.value.confirm = data.confirm
    modalData.value.cancel = data.cancel
  }
  return { isOpen, toggleModal, setDataModal, modalData }
})