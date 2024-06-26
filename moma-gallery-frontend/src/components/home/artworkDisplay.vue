<template>
  <div class="collection">
    <div class="container">
      <div class="collection-header">
        <div class="row align-items-center">
          <div class="col">
            <h1 class="fw-semibold">Artworks</h1>
          </div>
          <div class="col text-end">View All Artworks</div>
        </div>
      </div>
      <hr class="border-2 pb-3"/>
      <div class="row pt-3" data-masonry='{"percentPosition": true }' ref="masonryContainer">
        <div class="col-6 col-md-4 col-lg-4 mb-4" v-for="artwork in limitedArtworks" :key="artwork.id">
          <router-link :to="{ name: 'ArtworkDetail', params: { id: artwork.id } }">
            <div class="card rounded-0 border-0">
              <img :src="artwork.image" class="card-img rounded-0" alt="..." />
              <h5 class="pt-3">{{ artwork.title }}</h5>
              <small class="text-body-secondary">{{ getArtistName(artwork.artist_id) }}, {{ formatDateYear(artwork.creation_date) }}</small>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, nextTick } from 'vue';
import { useDB } from '@/dbComposition';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';

export default {
  setup() {
    const { artworks, getArtistName, formatDateYear } = useDB();
    const masonryContainer = ref(null);
    const masonry = ref(null);

    const limitedArtworks = computed(() => artworks.value.slice(0, 6));

    const initMasonry = () => {
      const container = masonryContainer.value;
      imagesLoaded(container, () => {
        if (!masonry.value) {
          masonry.value = new Masonry(container, {
            itemSelector: '.col-6',
            percentPosition: true,
          });
        } else {
          masonry.value.reloadItems();
          masonry.value.layout();
        }
      });
    };

    onMounted(() => {
      initMasonry();
    });

    const refreshMasonry = () => {
      nextTick(() => {
        initMasonry();
      });
    };

    return {
      artworks,
      getArtistName,
      formatDateYear,
      limitedArtworks,
      masonryContainer,
      refreshMasonry
    };
  },
  updated() {
    this.refreshMasonry();
  }
};
</script>

<style scoped>
a:link {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: black;
}
</style>
