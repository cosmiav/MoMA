<template>
  <div>
    <div class="row">
      <div
        class="col-6 col-sm-4 col-md-3 pb-3"
        v-for="n in 8"
        :key="n"
        v-if="loading"
      >
        <div class="card rounded-0 border-0">
          <div class="card-img-wrapper skeleton"></div>
          <div class="card-body">
            <h4 class="card-title fw-bold skeleton-text"></h4>
          </div>
        </div>
      </div>

      <div
        class="col-6 col-sm-4 col-md-3 pb-3"
        v-for="artist in artists"
        :key="artist.id"
        v-else
      >
        <router-link
          :to="{
            name: 'ArtistsPage',
            params: { id: artist.id },
          }"
        >
          <div class="card rounded-0 border-0">
            <div class="card-img-wrapper">
              <img
                :src="getImage(artist.profile_picture)"
                class="card-img rounded-0 border-0"
                :alt="artist.name"
              />
            </div>
            <div class="card-body">
              <h4 class="card-title fw-bold">{{ artist.name }}</h4>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const loading = ref(true);
    const { artists, getImage } = mapState(["artists"]);
    const fetchArtists = mapActions(["fetchArtists"]);

    onMounted(async () => {
      await fetchArtists();
      loading.value = false;
    });

    return {
      loading,
      artists,
      getImage,
    };
  },
  computed: {
    ...mapState(["artists"]),
    ...mapGetters(["getImage"]),
  },
  methods: {
    ...mapActions(["fetchArtists"]),
  },
  mounted() {
    this.fetchArtists().then(() => {
      this.loading = false;
    });
  },
};
</script>

<style scoped>
.card-img-wrapper {
  position: relative;
  width: 100%;
  padding-top: 100%; /* This gives a 1:1 aspect ratio */
  background-color: #e0e0e0; /* Light grey background for skeleton */
}

.card-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Skeleton loader */
.skeleton {
  animation: shimmer 1.5s infinite linear;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
  background-size: 400% 100%;
}

.skeleton-text {
  width: 80%;
  height: 1.2em;
  margin: 0.5em 0;
  background-color: #e0e0e0; /* Light grey background for skeleton */
}

@keyframes shimmer {
  0% {
    background-position: -400% 0;
  }
  100% {
    background-position: 400% 0;
  }
}
</style>
