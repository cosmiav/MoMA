<template>
  <div class="container-fluid px-md-5 my-md-5">
    <div class="py-md-5 text-center">
      <h1 class="display-1 fw-bold p-4 p-md-1 text-black">Collection</h1>
    </div>

    <painting />
    <hr class="my-5" />
    <sculpture />
    <hr class="my-5" />

    <photography />
  </div>
</template>

<script setup>
import photography from "@/components/collection/photography.vue";
import sculpture from "@/components/collection/sculpture.vue";
import painting from "@/components/collection/painting.vue";
</script>
