<template>
  <h2 class="fw-bold pb-3">On View</h2>
  <div class="row">
    <div
      class="col-sm-6 col-md-4 col-lg-3"
      v-for="(exhibition, index) in currentExhibitions"
      :key="exhibition.id"
    >
      <router-link
        :to="{
          name: 'ExhibitionDetail',
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
            <h5 class="card-title fw-bold">{{ exhibition.title }}</h5>
            <small>
              <span>Through {{ formatDateMonth(exhibition.end_date) }}</span>
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
    const { formatDateMonth, currentExhibitions, getImage } = useDB();

    return {
      formatDateMonth,
      currentExhibitions,
      getImage,
    };
  },
};
</script>

<style scoped>
a:link {
  text-decoration: none;
}
</style>
