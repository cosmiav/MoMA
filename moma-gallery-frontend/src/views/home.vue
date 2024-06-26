<template>
  <div>
    <exhibitionDisplay />
    <hr />
    <onviewDisplay />
    <randomQuotes />
    <hr />
    <artworkDisplay />
  </div>
</template>

<script setup>
import artworkDisplay from "@/components/home/artworkDisplay.vue";
import exhibitionDisplay from "@/components/home/exhibitionDisplay.vue";
import onviewDisplay from "@/components/home/onviewDisplay.vue";
import randomQuotes from "@/components/home/randomQuotes.vue";
</script>

<style scoped></style>
