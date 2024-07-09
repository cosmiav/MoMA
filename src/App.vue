<script setup>
import { RouterView } from "vue-router";
import navbar from "./components/navbar.vue";
import footder from "./components/footer.vue";
</script>

<template>
  <header>
    <navbar></navbar>
  </header>
  <router-view></router-view>
  <footder></footder>
</template>

<style scoped></style>
