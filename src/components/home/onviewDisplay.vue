<template>
  <div class="row justify-content-between my-md-5" v-if="exhibition">
    <div class="col-md-6 align-self-center order-md-2">
      <img
        :src="getImage(exhibition.image)"
        class="img-fluid aspect-ratio-image rounded-0 border-0"
      />
    </div>
    <div class="col-md-6 col-lg-6 align-self-center">
      <h3 class="fw-bold m-0 mt-2">
        {{ getArtistName(exhibition.artist_id) }}
      </h3>
      <h3 class="fw-bold m-0">{{ exhibition.title }}</h3>

      <small class="text-body-secondary">
        {{ formatDateMonth(exhibition.start_date) }} -
        {{ formatDateYear(exhibition.end_date) }}
      </small>
      <br />
      <router-link
        :to="{
          name: 'ExhibitionPage',
          params: { id: exhibition.id },
        }"
        class="mt-3 d-block"
      >
        Learn More
      </router-link>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useDB } from "@/dbComposition";

export default {
  setup() {
    const {
      currentExhibitions,
      formatDateMonth,
      formatDateYear,
      getArtistName,
      getImage,
    } = useDB();
    const exhibition = computed(() => {
      if (!currentExhibitions.value || currentExhibitions.value.length === 0) {
        return null;
      }
      return currentExhibitions.value.reduce((latest, exhibition) => {
        return new Date(exhibition.end_date) > new Date(latest.end_date)
          ? exhibition
          : latest;
      }, currentExhibitions.value[0]);
    });

    return {
      exhibition,
      formatDateMonth,
      formatDateYear,
      getArtistName,
      getImage,
    };
  },
};
</script>

<style scoped>
a:link {
  color: #111111;
  text-decoration: underline;
}

a:visited {
  color: #585858;
}

a:hover {
  color: #282828;
  text-decoration: underline;
}
</style>
