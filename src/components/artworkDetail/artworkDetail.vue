<template>
    <div class="container">
      <div v-if="artwork">
        <div class="row pb-3">
            <div class="col align-self-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
            </div>
            <div class="col"></div>
        </div>
        <div class="row pt-3 pb-5">
          <div class="col-4">
            <img :src="artwork.image" alt="Artwork Image" class="pb-2"/>
          </div>
          <div class="col">
            <h2>{{ artwork.title }}</h2>
            <p>{{ getArtistName(artwork.artist_id) }}, {{ formatDateYear(artwork.creation_date) }}</p>
            <hr/>
            <p>{{ artwork.description }}</p></div>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useDB } from '@/dbComposition';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const { artworks, getArtistName, formatDateYear } = useDB();
  const artwork = ref(null);
  
  const fetchArtwork = (artworkId) => {
    const foundArtwork = artworks.value.find(a => a.id.toString() === artworkId.toString());
    artwork.value = foundArtwork;
  };
  
  onMounted(() => {
    const artworkId = route.params.id;
    fetchArtwork(artworkId);
  });
  
  watch(() => artworks.value, () => {
    const artworkId = route.params.id;
    fetchArtwork(artworkId);
  });
  </script>
  
  <style scoped>
  img {
    max-width: 100%;
  }
  </style>
  