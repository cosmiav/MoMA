<template>
  <div class="container-fluid pt-5 px-md-5">
    <div class="d-flex justify-content-center">
      <div class="py-5 my-md-5">
        <h1 class="display-2 fw-bold text-black">Collection</h1>
      </div>
    </div>

    <painting />
    <hr class="py-2" />
    <sculpture />
    <hr class="py-2" />
    <photography />
  </div>
</template>

<script setup>
import photography from "@/components/collection/photography.vue";
import sculpture from "@/components/collection/sculpture.vue";
import painting from "@/components/collection/painting.vue";
</script>

<style scoped></style>
