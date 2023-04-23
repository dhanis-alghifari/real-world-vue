<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  event: {
    required: true
  }
})

const msg = inject('GStore')
const router = useRouter()

const register = () => {
  router.push({
    name: 'event-details'
  })

  msg.flashMessage = `You are succesfully registered ${props.event.title}`

  setTimeout(() => {
    msg.flashMessage = ''
  }, 3000)
}
</script>
