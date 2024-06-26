<template>
  <div class="container my-md-5" v-if="latestExhibition">
    <div class="row pb-3 justify-content-between">
      <div class="col-md-6 align-self-center">
        <p class="my-3">On View</p>
        <h3>{{ latestExhibition.title }}</h3>
        <h5>
          Through
          {{ formatDateMonth(latestExhibition.end_date) }}
        </h5>
        <p>{{ latestExhibition.location }}</p>
        <br />
        <router-link
          :to="{
            name: 'ExhibitionDetail',
            params: { id: latestExhibition.id },
          }"
        >
          <p>Learn More</p>
        </router-link>
      </div>
      <div class="col-md-5 align-self-center">
        <div class="aspect-ratio-container">
          <img
            :src="getImage(latestExhibition.image)"
            class="img-fluid aspect-ratio-image rounded-0 border-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useDB } from "@/dbComposition";

export default {
  setup() {
    const { currentExhibitions, formatDateMonth, getImage } = useDB();
    const latestExhibition = computed(() => {
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
      latestExhibition,
      formatDateMonth,
      getImage,
    };
  },
};
</script>

<style scoped>
.aspect-ratio-container {
  position: relative;
  width: 100%;
  padding-top: 75%; /* 4:3 aspect ratio (3/4 = 75%) */
}

.aspect-ratio-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the container */
}

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
