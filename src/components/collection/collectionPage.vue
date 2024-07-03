<template>
  <div>
    <div v-if="collection">
      <div class="container pt-5">
        <div class="row my-3 my-md-5 justify-content-between">
          <div class="col-md-6 order-md-2">
            <img
              :src="getImage(collection.image)"
              alt="Exhibition Image"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6 align-self-center order-md-1 mt-3 mt-md-0">
            <h2 class="display-6 fw-bold m-0">
              {{ collection.title }}
            </h2>
            <h7>
              {{ getArtistName(collection.artist_id) }}, {{ collection.date }}
            </h7>
          </div>
        </div>
      </div>

      <hr class="py-2" />

      <div class="container my-md-5">
        <div class="row justify-content-between">
          <div class="col order-md-1">
            <div class="row">
              <div class="col-12 pb-2">
                <h6>Medium</h6>
                <p>{{ collection.medium }}</p>
              </div>
              <div class="col-12 pb-2">
                <h6>Dimensions</h6>
                <p>{{ collection.dimensions }}</p>
              </div>
              <div class="col-12 pb-2">
                <h6>Credit</h6>
                <p>{{ collection.credit }}</p>
              </div>
              <div class="col-12">
                <h6>Copyright</h6>
                <p>{{ collection.copyright }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="container">
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, watch } from "vue";
import { useDB } from "@/dbComposition";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const { collection: collections, getImage, getArtistName } = useDB();
    const collection = ref(null);

    const fetchCollection = (collectionId) => {
      const foundCollection = collections.value.find(
        (e) => e.id.toString() === collectionId.toString()
      );
      collection.value = foundCollection;
    };

    onMounted(() => {
      const collectionId = route.params.id;
      fetchCollection(collectionId);
    });

    watch(
      () => collections.value,
      () => {
        const collectionId = route.params.id;
        fetchCollection(collectionId);
      }
    );

    return {
      collection,
      getImage,
      getArtistName,
    };
  },
};
</script>

<style scoped>
h6 {
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
}
</style>
