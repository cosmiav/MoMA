<template>
  <div class="container-fluid my-3 px-md-5 my-md-5">
    <div class="mt-5 py-5">
      <h1 class="display-3 fw-bold text-black text-center">Collection</h1>
    </div>

    <painting />
    <hr class="my-md-5" />
    <sculpture />
    <hr class="my-md-5" />

    <photography />
  </div>
</template>

<script setup>
import photography from "@/components/collection/photography.vue";
import sculpture from "@/components/collection/sculpture.vue";
import painting from "@/components/collection/painting.vue";
</script>
