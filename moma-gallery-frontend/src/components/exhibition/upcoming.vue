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
            name: 'ExhibitionDetail',
            params: { id: exhibition.id },
          }"
        >
          <div class="card border-0 rounded-0">
            <img
              :src="exhibition.image"
              class="card-img-top rounded-0"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ exhibition.title }}</h5>
              <small>
                <span
                  >Through {{ formatDateMonth(exhibition.start_date) }}</span
                >
                <br />
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
    const { formatDateMonth, upcomingExhibitions } = useDB();

    return {
      formatDateMonth,
      upcomingExhibitions,
    };
  },
};
</script>

<style scoped>
a:link {
  text-decoration: none;
}
</style>
