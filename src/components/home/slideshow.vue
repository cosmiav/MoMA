<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        v-for="(item, index) in slideshowItems"
        :key="index"
        type="button"
        :data-bs-target="'#carouselExampleCaptions'"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
        :aria-label="'Slide ' + (index + 1)"
      ></button>
    </div>
    <div class="carousel-inner">
      <div
        v-for="(item, index) in slideshowItems"
        :key="index"
        :class="['carousel-item', { active: index === 0 }]"
      >
        <div class="image-wrapper">
          <img :src="item.image" class="d-inline w-100" :alt="item.title" />
        </div>
        <div class="overlay">
          <div
            class="carousel-caption d-flex flex-column h-100 align-items-md-start align-items-center justify-content-center"
          >
            <small class="mb-3"
              >{{ item.start_date }} - {{ item.end_date }}
            </small>
            <!-- Artist -->
            <h1 class="display-4 d-none d-md-block fw-bold">
              {{ item.artist }}
            </h1>
            <h2 class="fw-bold d-md-none">
              {{ item.artist }}
            </h2>
            <!-- Title -->
            <h1 class="display-4 d-none d-md-block fw-bold mb-5">
              {{ item.title }}
            </h1>
            <small class="mb-3 d-md-none">
              {{ item.title }}
            </small>
            <br />
            <router-link
              :to="{
                name: 'ExhibitionPage',
                params: { id: item.id },
              }"
              class="btn btn-outline-light px-4 py-2 rounded-0"
            >
              Learn More
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useDB } from "@/dbComposition";

export default {
  setup() {
    const {
      currentExhibitions,
      upcomingExhibitions,
      getImage,
      getArtistName,
      formatDateMonth,
      formatDateYear,
    } = useDB();

    const slideshowItems = computed(() => {
      const exhibitions = [
        ...currentExhibitions.value,
        ...upcomingExhibitions.value,
      ];

      const selectedExhibitions = exhibitions.slice(0, 10);

      const items = [...selectedExhibitions].map((item) => ({
        id: item.id,
        image: getImage(item.imagePath || item.image),
        artist: getArtistName(item.artist_id),
        title: item.title || item.name,
        start_date: formatDateMonth(item.start_date),
        end_date: formatDateYear(item.end_date),
      }));

      return items;
    });

    return {
      slideshowItems,
    };
  },
};
</script>

<style scoped>
.image-wrapper {
  height: 100dvh;
}

.image-wrapper img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
</style>
