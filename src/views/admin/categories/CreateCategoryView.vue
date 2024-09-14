<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const rememberMe = ref(false)

const clickHandler = async () => {
  console.log('===========',
    name.value, email.value, rememberMe.value)
  // Let's pretend this is an ajax request:
  await new Promise((r) => setTimeout(r, 1000))
}
</script>

<template>
  <FormKit
    type="form"
    id="category-form"
    name="category-form"
    submit-label="Create"
  >
    <FormKit
      type="text"
      name="name"
      label="Your name"
      placeholder="Jane Doe"
      help="What do people call you?"
    />
    <FormKit
      type="text"
      name="email"
      label="Your email"
      placeholder="jane@example.com"
      help="What email should we use?"
    />
  </FormKit>
</template>