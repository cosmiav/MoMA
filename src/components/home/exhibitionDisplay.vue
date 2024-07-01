<template>
  <div class="row justify-content-between" v-if="exhibition">
    <div class="col-md-6 col-lg-5 align-self-center">
      <img
        :src="getImage(exhibition.image)"
        class="img-fluid aspect-ratio-image rounded-0 border-0"
      />
    </div>
    <div class="col-md-5 col-lg-6 align-self-center">
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
  <div v-else>
    <p>No upcoming exhibitions.</p>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useDB } from "@/dbComposition";

export default {
  setup() {
    const {
      exhibition: exhibitions,
      formatDateMonth,
      formatDateYear,
      getImage,
      getArtistName,
    } = useDB();
    const exhibition = ref(null);

    const filterNearestUpcomingExhibition = () => {
      const upcoming = exhibitions.value.filter(
        (item) => item.status === "upcoming"
      );
      if (upcoming.length) {
        exhibition.value = upcoming.reduce((nearest, current) => {
          const nearestDate = new Date(nearest.start_date);
          const currentDate = new Date(current.start_date);
          return currentDate < nearestDate ? current : nearest;
        });
      }
    };

    watch(exhibitions, (newExhibition) => {
      filterNearestUpcomingExhibition();
    });

    return {
      exhibition,
      formatDateMonth,
      formatDateYear,
      getImage,
      getArtistName,
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
