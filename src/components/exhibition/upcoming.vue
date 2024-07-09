<template>
  <div>
    <h2 class="fw-bold pb-3">Upcoming Exhibition</h2>
    <div class="row">
      <div
        class="col-sm-6 col-lg-3 py-2"
        v-for="(exhibition, index) in upcomingExhibitions"
        :key="exhibition.id"
      >
        <router-link
          :to="{
            name: 'ExhibitionPage',
            params: { id: exhibition.id },
          }"
        >
          <div class="card border-0 rounded-0">
            <img
              :src="getImage(exhibition.image)"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body">
              <small> {{ getArtistName(exhibition.artist_id) }}</small>
              <h5 class="card-title fw-bold m-0">{{ exhibition.title }}</h5>
              <small class="m-0">
                Initiated on {{ formatDateMonth(exhibition.start_date) }}
              </small>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowLeft, ArrowRight } from "lucide-vue-next";
import { ref, computed, onMounted } from "vue";
import { useDB } from "@/dbComposition";

export default {
  components: {
    ArrowRight,
    ArrowLeft,
  },
  setup() {
    const {
      formatDateMonth,
      formatDateYear,
      upcomingExhibitions,
      getImage,
      getArtistName,
    } = useDB();

    return {
      formatDateMonth,
      formatDateYear,
      upcomingExhibitions,
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
