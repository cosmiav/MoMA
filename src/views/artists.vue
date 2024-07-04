<template>
  <div class="container-fluid pt-5 px-md-5">
    <div class="d-flex justify-content-center">
      <div class="py-5 my-md-5">
        <h1 class="display-2 fw-bold text-black">Artists</h1>
      </div>
    </div>

    <allArtists />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import allArtists from "@/components/artists/allArtists.vue";

const store = useStore();

onMounted(() => {
  store.dispatch("fetchArtists");
});
</script>
