import { defineStore } from 'pinia'
import { ref } from 'vue'

export enum ModalType {
  Create = 'create',
  Update = 'update',
  Delete = 'delete'
}

type Information = {
  title: string
  description: string
  confirm: string
  cancel: string
}

const initialModalInformation = {
  title: '',
  description: '',
  confirm: 'Confirm',
  cancel: 'Cancel'
}

const modalInformation = ref<Information>(initialModalInformation)

export const useModalState = defineStore('modalState', () => {
  const isOpen = ref(false)

  const modalType = ref<ModalType>(ModalType.Create)

  const data = ref<Record<any, any>>()

  const closeModal = () => {
    isOpen.value = false
  }

  const openModal = () => {
    isOpen.value = true
  }

  const setModalType = (type: ModalType) => {
    modalType.value = type

  }

  const setInformation = (information?: Information) => {
    modalInformation.value = information || initialModalInformation
  }

  const setData = (input: Record<any, any> = {}) => {
    data.value = input
  }

  const modalData = () => {
    return {
      type: modalType.value,
      information: modalInformation.value,
      data: data.value
    }
  }

  return { isOpen, closeModal, openModal, modalData, setModalType, setInformation, setData }
})