<template>
  <div class="container-fluid pt-5 px-md-5">
    <div class="d-flex justify-content-center">
      <div class="py-5 my-md-5">
        <h1 class="display-2 fw-bold text-black">Exhibition</h1>
      </div>
    </div>

    <div class="d-flex justify-content-center justify-content-md-start">
      <button @click="showOnViewUpcoming">On View & Upcoming</button> /
      <button @click="showArchiveView">Archive</button>
    </div>
    <hr class="py-2" />
    <archive v-if="showArchive" />
    <onView v-if="!showArchive" />
    <hr class="py-2" v-if="!showArchive" />
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
