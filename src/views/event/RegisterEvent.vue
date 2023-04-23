<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script setup>
import { useRouter } from "vue-router";

defineProps({
  event: {
    required: true
  }
})

const router = useRouter();

const register = () => {
    router.push({
        name: "event-details"
    })
}
</script>
