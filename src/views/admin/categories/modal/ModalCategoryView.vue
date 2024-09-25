<script setup lang="ts">
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import axios from 'axios'
import { useModalState } from '@/stores/modalState.ts'

const modelStateStore = useModalState()
const modalData = modelStateStore.modalData()

const handlerCreate = async (data: any) => {
  const { name, description } = data
  try {
    await axios.post('/category', { name, description })
    alert('Action successfully')
  } catch (error) {
    alert(error)
  }
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000))
}


const handlerUpdate = async (data: any) => {
  const { name, description } = data
  console.log(modalData.data?.id)
  try {
    await axios.put(`/category/${modalData.data?.id}`, { name, description })
    alert('Action successfully')
  } catch (error) {
    alert(error)
  }
}

const functionAction = modalData.type === 'create' ? {
  handler: (data: any) => handlerCreate(data),
  buttonLabel: 'Create'
} : {
  handler: (data: any) => handlerUpdate(data),
  buttonLabel: 'Update'
}

</script>

<template>
  <TransitionRoot as="template" :show="modelStateStore.isOpen">
    <Dialog class="relative z-10">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-100 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            >
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="justify-center sm:items-center sm:justify-between">
                  <div
                    class="mx-auto flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                  >
                    <ExclamationTriangleIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
                  </div>
                  <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">
                    </DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">
                        <FormKit
                          type="form"
                          id="category-form"
                          name="category-form"
                          :submit-label="functionAction.buttonLabel"
                          class="custom-submit-button"
                          @submit="functionAction.handler"
                        >
                          <FormKit
                            type="text"
                            name="name"
                            label="Category name"
                            validation="required"
                            class="w-[100%-2rem]"
                          />
                          <FormKit
                            type="textarea"
                            name="description"
                            label="Category description"
                            validation="required"
                          />
                        </FormKit>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  @click="modelStateStore.closeModal()"
                >
                  {{ modalData.information.cancel }}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script></script>
