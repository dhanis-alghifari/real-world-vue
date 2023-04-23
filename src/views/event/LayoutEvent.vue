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
import { useRouter } from 'vue-router'

const event = ref({})
const props = defineProps({
  id: {
    required: true
  }
})
const router = useRouter()

onMounted(() => {
  EventService.getDetailEvent(props.id)
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
      console.log('error', error)
      if (error.response && error.response.status === 404) {
        router.push({
          name: '404-resource',
          params: { resource: 'event' }
        })
      } else {
        router.push({
          name: 'network-error'
        })
      }
    })
})
</script>

<style>
#nav a {
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
