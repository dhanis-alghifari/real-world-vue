<script setup>
import EventCard from '@/components/EventCard.vue'
import { computed, onMounted, ref, watchEffect } from 'vue'
import EventService from '@/services/EventService'

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

const events = ref([])
const totalEvents = ref(0)

onMounted(() => {
  watchEffect(() => {
    events.value = []
    EventService.getEvents(2, props.page)
      .then((response) => {
        events.value = response.data
        totalEvents.value = response.headers['x-total-count']
      })
      .catch((error) => {
        console.log('error', error)
      })
  })
})

const hasNextPage = computed(() => {
  let totalPages = Math.ceil(totalEvents.value / 2)
  return props.page < totalPages
})
</script>

<template>
  <h1>Event For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="pagination">
      <router-link
        :to="{ name: 'event-list', query: { page: props.page - 1 } }"
        rel="prev"
        v-if="page !== 1"
      >
        Prev Page
      </router-link>

      <router-link
        :to="{ name: 'event-list', query: { page: props.page + 1 } }"
        rel="next"
        v-if="hasNextPage"
      >
        Next Page
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
