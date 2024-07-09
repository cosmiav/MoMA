<template>
  <div>
    <div class="row">
      <div
        class="col-6 col-sm-4 col-md-3 pb-3"
        v-for="artist in artists"
        :key="artist.id"
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
import { useDB } from "@/dbComposition";

export default {
  setup() {
    const { artists, getImage } = useDB();

    return {
      artists,
      getImage,
    };
  },
};
</script>

<style scoped>
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
