<script setup>
import { RouterView } from "vue-router";
import navbar from "./components/navbar.vue";
import footder from "./components/footer.vue";
import { useStore } from "vuex";
import { onMounted } from "vue";

const store = useStore();
const loading = store.state.loading;

onMounted(() => {
  store.dispatch("fetchData");
});
</script>

<template>
  <div v-if="loading">
    Loading..dsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.
  </div>
  <div v-else>
    <header>
      <navbar></navbar>
    </header>
    <router-view></router-view>
    <footder></footder>
  </div>
</template>

<style scoped></style>
