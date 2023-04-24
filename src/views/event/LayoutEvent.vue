<template>
  <div v-if="msg.event">
    <h1>{{ msg.event.title }}</h1>
    <div id="nav">
      <router-link :to="{ name: 'event-details' }">Details</router-link>
      |
      <router-link :to="{ name: 'event-register' }">Register</router-link>
      |
      <router-link :to="{ name: 'event-edit' }">Edit</router-link>
    </div>
    <router-view :event="msg.event" />
  </div>
</template>

<script setup>
import { inject } from "vue";


const msg = inject('GStore')
</script>

<style>
#nav a {
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
