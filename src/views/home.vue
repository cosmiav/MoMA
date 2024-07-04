<template>
  <slideshow />
  <div class="container-fluid px-md-5 pt-3">
    <exhibition-display />
    <hr class="py-1 py-md-0" />
    <onview-display />
    <hr class="py-1 py-md-0" />
    <artists />
  </div>
  <collection />
</template>

<script setup>
import { defineAsyncComponent } from "vue";

// Import the loading component
import LoadingComponent from "@/components/loading.vue";

// Lazy load the components with loading indicators
const exhibitionDisplay = defineAsyncComponent({
  loader: () => import("@/components/home/exhibitionDisplay.vue"),
  loadingComponent: LoadingComponent,
  delay: 200, // Optional delay before showing loading component
});

const onviewDisplay = defineAsyncComponent({
  loader: () => import("@/components/home/onviewDisplay.vue"),
  loadingComponent: LoadingComponent,
  delay: 200, // Optional delay before showing loading component
});

const slideshow = defineAsyncComponent({
  loader: () => import("@/components/home/slideshow.vue"),
  loadingComponent: LoadingComponent,
  delay: 200, // Optional delay before showing loading component
});

const artists = defineAsyncComponent({
  loader: () => import("@/components/home/artists.vue"),
  loadingComponent: LoadingComponent,
  delay: 200, // Optional delay before showing loading component
});

const collection = defineAsyncComponent({
  loader: () => import("@/components/home/collection.vue"),
  loadingComponent: LoadingComponent,
  delay: 200, // Optional delay before showing loading component
});
</script>

<style scoped></style>
