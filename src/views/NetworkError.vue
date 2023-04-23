<template>
    <div class="networkError">
      <h1>Uh-Oh!</h1>
  
      <h3>
        It looks like you're experiencing some network issues, please take a breath and
        <a href="#" @click="reloadPage">click here</a> to try again.
      </h3>
    </div>
  </template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const reloadPage = () => {
    router.go(-1)
}
</script>