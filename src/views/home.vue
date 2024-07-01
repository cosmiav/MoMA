<template>
  <Suspense>
    <slideshow />
    <div class="container-fluid px-md-5 my-md-5 my-3">
      <exhibitionDisplay />
      <hr class="my-3 my-md-5" />
      <onviewDisplay />
      <hr class="my-3 my-md-5" />
      <artists />
    </div>
    <collection />
  </Suspense>
</template>

<script setup>
import exhibitionDisplay from "@/components/home/exhibitionDisplay.vue";
import onviewDisplay from "@/components/home/onviewDisplay.vue";
import slideshow from "@/components/home/slideshow.vue";
import artists from "@/components/home/artists.vue";
import collection from "@/components/home/collection.vue";
</script>

<style scoped></style>
