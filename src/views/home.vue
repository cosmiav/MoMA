<template>
  <slideshow />
  <div class="container-fluid px-md-5 pt-3">
    <exhibitionDisplay />
    <hr class="py-1 py-md-0" />
    <onviewDisplay />
    <hr class="py-1 py-md-0" />
    <artists />
  </div>
</template>

<script setup>
import exhibitionDisplay from "@/components/home/exhibitionDisplay.vue";
import onviewDisplay from "@/components/home/onviewDisplay.vue";
import slideshow from "@/components/home/slideshow.vue";
import artists from "@/components/home/artists.vue";
import collection from "@/components/home/collection.vue";
</script>

<style scoped></style>
