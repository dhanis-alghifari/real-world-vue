<template>
    <div v-if="event">
      <h1>{{ event.title }}</h1>
      <div id="nav">
        <router-link :to="{ name: 'event-details' }">Details</router-link>
        |
        <router-link :to="{ name: 'event-register' }">Register</router-link>
        |
        <router-link :to="{ name: 'event-edit' }">Edit</router-link>
      </div>
    <router-view :event="event" />
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
  