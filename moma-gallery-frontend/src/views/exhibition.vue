<template>
  <div class="container-fluid px-md-5 my-md-5">
    <div class="py-md-5 text-center">
      <h1 class="display-1 fw-bold p-4 p-md-1 text-black">Exhibition</h1>
    </div>

    <div class="justify-content-start">
      <button @click="showOnViewUpcoming">On View & Upcoming</button> /
      <button @click="showArchiveView">Archive</button>
    </div>
    <hr class="my-md-4" />
    <archive v-if="showArchive" />
    <onView v-if="!showArchive" />
    <hr class="my-5" v-if="!showArchive" />
    <upcoming v-if="!showArchive" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import onView from "@/components/exhibition/onView.vue";
import upcoming from "@/components/exhibition/upcoming.vue";
import archive from "@/components/exhibition/archive.vue";

// State to manage which component is shown
const showArchive = ref(false);

// Methods to toggle the state
const showArchiveView = () => {
  showArchive.value = true;
};

const showOnViewUpcoming = () => {
  showArchive.value = false;
};
</script>

<style scoped>
button {
  padding: 0px;
}
</style>
