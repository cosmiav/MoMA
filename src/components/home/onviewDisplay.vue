<template>
  <div class="row pb-3 justify-content-between" v-if="exhibition">
    <div class="col-md-6 align-self-center order-md-2">
      <img
        :src="getImage(exhibition.image)"
        class="img-fluid aspect-ratio-image rounded-0 border-0"
      />
    </div>
    <div class="col-md-5 align-self-center order-md-1">
      <p class="my-3">Upcoming Exhibition</p>
      <h2>{{ getArtistName(exhibition.artist_id) }}</h2>
      <h5 class="">{{ exhibition.title }}</h5>
      <p class="my-3">
        {{ formatDateMonth(exhibition.start_date) }} -
        {{ formatDateYear(exhibition.end_date) }}
        <br />
        {{ exhibition.location }}
      </p>
      <router-link
        :to="{
          name: 'ExhibitionDetail',
          params: { id: exhibition.id },
        }"
      >
        <p>Learn More</p>
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
}

a:visited {
  color: #585858;
}

a:hover {
  color: #282828;
  text-decoration: underline;
}
</style>
