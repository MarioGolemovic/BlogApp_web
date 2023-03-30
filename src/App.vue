<template>
  <Navbar />
  <RouterView />
</template>

<script>
  import { RouterView } from 'vue-router'
  import Navbar from './components/NavbarView.vue'

  export default {
    components: { Navbar, RouterView }
  }
</script>

<style>
</style>
