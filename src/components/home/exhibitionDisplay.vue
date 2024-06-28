<template>
  <div class="container my-md-5" v-if="nearestUpcomingExhibition">
    <div class="row pb-3 justify-content-between">
      <div class="col-md-6 col-lg-5 align-self-center">
        <img
          :src="getImage(nearestUpcomingExhibition.image)"
          class="img-fluid aspect-ratio-image rounded-0 border-0"
        />
      </div>
      <div class="col-md-5 col-lg-6 align-self-center">
        <p class="my-3">Upcoming Exhibition</p>
        <h3>{{ nearestUpcomingExhibition.title }}</h3>
        <h5>
          {{ formatDateMonth(nearestUpcomingExhibition.start_date) }} -
          {{ formatDateMonth(nearestUpcomingExhibition.end_date) }}
        </h5>
        <p>{{ nearestUpcomingExhibition.location }}</p>
        <br />
        <router-link
          :to="{
            name: 'ExhibitionDetail',
            params: { id: nearestUpcomingExhibition.id },
          }"
        >
          <p>Learn More</p>
        </router-link>
      </div>
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
    const { exhibition, formatDateMonth, getImage } = useDB();
    const nearestUpcomingExhibition = ref(null);

    const filterNearestUpcomingExhibition = () => {
      const upcoming = exhibition.value.filter(
        (item) => item.status === "upcoming"
      );
      if (upcoming.length) {
        nearestUpcomingExhibition.value = upcoming.reduce(
          (nearest, current) => {
            const nearestDate = new Date(nearest.start_date);
            const currentDate = new Date(current.start_date);
            return currentDate < nearestDate ? current : nearest;
          }
        );
      }
    };

    watch(exhibition, (newExhibition) => {
      filterNearestUpcomingExhibition();
    });

    return {
      nearestUpcomingExhibition,
      formatDateMonth,
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
