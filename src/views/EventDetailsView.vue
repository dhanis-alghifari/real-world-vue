<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import EventService from '@/services/EventService'

const event = ref({})
const props = defineProps({
  id: {
    required: true
  }
})

onMounted(() => {
  EventService.getDetailEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log('error', error)
    })
})
</script>
