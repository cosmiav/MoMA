<template>
  <div>
    <div v-if="exhibition">
      <div class="container my-md-5">
        <div class="row pt-3 justify-content-between">
          <div class="col-md-6 order-md-2">
            <img :src="exhibition.image" alt="Exhibition Image" class="img-fluid my-3"/>
          </div>
          <div class="col-md-5 align-self-center order-md-1">
            <p style="text-transform: capitalize;">{{ exhibition.status }} Exhibition</p>
            <h3 class="fw-bold fs-1">{{ exhibition.title }}</h3>
            <h4>{{ formatDateMonth(exhibition.start_date) }} - {{ formatDateMonth(exhibition.end_date) }}</h4>
            <span>{{ exhibition.location }}</span>
          </div>
        </div>
      </div>
      
      <hr class="my-5"/>

      <div class="container my-md-5">
        <div class="row justify-content-between">
        <div class="col-md-8 order-md-2 pb-5">
          <p v-html="exhibition.description"></p>
          <p class="text-body-secondary">{{ exhibition.organized }}</p>
        </div>
        <div class="col-md-3 order-md-1">
          <div class="row">
            <div class="col-12">
              <h6>Exhibition Details</h6>
              <p style="text-transform: capitalize;">{{ formatDateMonth(exhibition.start_date) }} - {{ formatDateMonth(exhibition.end_date) }} <br/> {{ exhibition.status }}</p>
            </div>
            <div class="col-12 my-3">
              <h6>Gallery</h6>
              <p>
                {{ exhibition.location }} <br/> New York
              </p>
            </div>
            <div class="col-12">
              <h6>Connect</h6>
              <p> 
                <a href="https://www.instagram.com/themuseumofmodernart/">@themuseumofmodernart</a>
              </p>
            </div>
        </div>
        </div>
      </div>
      </div>
    </div>
    
    <div v-else>
      <div class="container">
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { useDB } from '@/dbComposition';
import { useRoute } from 'vue-router';

export default {
  setup() {

    const route = useRoute();
    const { exhibition: exhibitions, formatDateMonth } = useDB();
    const exhibition = ref(null);

    const fetchExhibition = (exhibitionId) => {
      const foundExhibition = exhibitions.value.find(e => e.id.toString() === exhibitionId.toString());
      exhibition.value = foundExhibition;
    };

    onMounted(() => {
      const exhibitionId = route.params.id;
      fetchExhibition(exhibitionId);
    });

    watch(() => exhibitions.value, () => {
      const exhibitionId = route.params.id;
      fetchExhibition(exhibitionId);
    });

    return {
      exhibition,
      formatDateMonth,
    };
  }
};
</script>

<style scoped>

h6 {
  text-transform: uppercase;
  font-weight: bold;
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
