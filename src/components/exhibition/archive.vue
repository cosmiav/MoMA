<template>
  <div v-for="(exhibit, index) in pastExhibitions" :key="index" class="mb-4">
    <router-link
      :to="{ name: 'ExhibitionDetail', params: { id: exhibit.id } }"
      class="d-flex align-items-center row active-link"
    >
      <div class="col-5 col-md-2">
        <img :src="getImage(exhibit.image)" alt="" class="img-fluid" />
      </div>
      <div class="col-7 col-md-10 d-flex flex-column flex-md-row">
        <!--ARTIST-->
        <div class="col-md-3 col-lg-2 d-none d-md-block">
          {{ getArtistName(exhibit.artist_id) }}
        </div>

        <div class="col-md-3 col-lg-2 d-md-none">
          <small>{{ getArtistName(exhibit.artist_id) }}</small>
        </div>
        <!--TITLE-->
        <div class="d-md-none">
          <h6 class="fs-6 my-1">{{ exhibit.title }}</h6>
        </div>
        <div class="col-md-5 d-none d-md-block px-4">{{ exhibit.title }}</div>
        <!--DATE-->
        <div class="col-md-4 d-none d-md-block">
          {{ formatDateMonth(exhibit.start_date) }} -
          {{ formatDateMonth(exhibit.end_date) }}
        </div>

        <div class="col-md-4 d-md-none" style="font-size: 14px">
          <small>
            {{ formatDateMonth(exhibit.start_date) }} -
            {{ formatDateMonth(exhibit.end_date) }}</small
          >
        </div>

        <div class="col-1 d-none d-lg-block">
          <ArrowRight style="width: 24px" />
        </div>
      </div>
    </router-link>
    <hr class="my-4" />
  </div>
</template>

<script>
import { useDB } from "@/dbComposition";
import { ArrowRight } from "lucide-vue-next";

export default {
  components: { ArrowRight },
  setup() {
    const { pastExhibitions, formatDateMonth, getArtistName, getImage } =
      useDB();

    return {
      pastExhibitions,
      formatDateMonth,
      getArtistName,
      getImage,
    };
  },
};
</script>

<style scoped></style>
