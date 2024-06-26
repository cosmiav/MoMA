<template>
  <div class="container pt-3">
    <div class="collection-header">
      <div class="row align-items-center">
        <div class="col">
          <h1 class="fw-semibold text-center">Artworks</h1>
        </div>
      </div>
    </div>
    <hr class="border-2 pb-3"/>
    <div class="row pt-3">
      <div class="col-6 col-md-4 col-xl-3 pb-2" v-for="artwork in paginatedArtworks" :key="artwork.id">
        <router-link :to="{ name: 'ArtworkDetail', params: { id: artwork.id } }">
          <div class="card rounded-0 border-0">
            <div class="card-img-wrapper">
              <img
                :src="artwork.image"
                class="card-img rounded-0 img-thumbnail border-0"
                alt="..."
              />
            </div>
            <div class="card-body">
              <h6 class="card-title">{{ artwork.title }}</h6>
              <small class="card-title text-body-secondary">
                {{ getArtistName(artwork.artist_id) }}, {{ formatDateYear(artwork.creation_date) }}
              </small>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <br>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center p-3 rounded-0">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" @click="goToPage(currentPage - 1)">Previous</a>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: page === currentPage }">
          <a class="page-link" @click="goToPage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" @click="goToPage(currentPage + 1)">Next</a>
        </li>
      </ul>
    </nav>
    <br>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useDB } from '@/dbComposition';

const { artworks, getArtistName, formatDateYear } = useDB();
const currentPage = ref(1);
const itemsPerPage = 8;

const paginatedArtworks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return artworks.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() => {
  return Math.ceil(artworks.value.length / itemsPerPage);
});

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};
</script>

<style scoped>
.pagination>li>a {
  border-radius: 0px !important;
}
.card-img-wrapper {
  position: relative;
  width: 100%;
  padding-top: 100%; /* This gives a 1:1 aspect ratio */
}

.card-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
