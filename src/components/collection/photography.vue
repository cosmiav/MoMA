<template>
  <h2 class="fw-bold pb-3">Photography</h2>
  <div class="row">
    <div
      class="col-sm-6 col-md-4 col-lg-3"
      v-for="(collection, index) in photographyCollections"
      :key="collection.id"
    >
      <router-link
        :to="{
          name: 'CollectionPage',
          params: { id: collection.id },
        }"
      >
        <div class="card border-0 rounded-0">
          <img
            :src="getImage(collection.image)"
            class="card-img-top rounded-0"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title fw-bold m-0">{{ collection.title }}</h5>
            <small>
              <span
                >{{ getArtistName(collection.artist_id) }},
                {{ collection.date }}</span
              >
              <br />
            </small>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ArrowLeft, ArrowRight } from "lucide-vue-next";
import { useDB } from "@/dbComposition";

export default {
  components: {
    ArrowRight,
    ArrowLeft,
  },
  setup() {
    const { formatDateMonth, photographyCollections, getImage, getArtistName } =
      useDB();

    return {
      formatDateMonth,
      photographyCollections,
      getImage,
      getArtistName,
    };
  },
};
</script>

<style scoped>
a:link {
  text-decoration: none;
}
</style>
