<template>
  <div>
    <div v-if="artist">
      <div class="container my-md-5">
        <div class="row pt-3 justify-content-between">
          <div class="col-md-6 order-md-2">
            <img
              :src="getImage(artist.profile_picture)"
              alt="Artist Image"
              class="img-fluid my-3"
            />
          </div>
          <div class="col-md-5 align-self-center order-md-1">
            <h3 class="fw-bold fs-1">{{ artist.name }}</h3>
            <span>{{ artist.location }}</span>
          </div>
        </div>
      </div>

      <hr class="my-5" />

      <div class="container my-md-5">
        <div class="row justify-content-between">
          <div class="col-md-8 order-md-2 pb-5">
            <p v-html="artist.description"></p>
            <p class="text-body-secondary">{{ artist.awards }}</p>
          </div>
          <div class="col-md-3 order-md-1">
            <div class="row">
              <div class="col-12">
                <h6>Details</h6>
                <p>
                  {{ artist.nationality }} <br />
                  b. {{ artist.birthdate }} <br />
                  d. {{ artist.deathdate }}
                </p>
              </div>
              <div class="col-12">
                <h6>Connect</h6>
                <p>
                  <a href="https://www.instagram.com/themuseumofmodernart/"
                    >@themuseumofmodernart</a
                  >
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
import { ref, onMounted, watch } from "vue";
import { useDB } from "@/dbComposition";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const { artists, formatDate, getImage } = useDB();
    const artist = ref(null);

    const fetchArtist = (artistId) => {
      const foundArtist = artists.value.find(
        (a) => a.id.toString() === artistId.toString()
      );
      artist.value = foundArtist;
    };

    onMounted(() => {
      const artistId = route.params.id;
      fetchArtist(artistId);
    });

    watch(
      () => artists.value,
      () => {
        const artistId = route.params.id;
        fetchArtist(artistId);
      }
    );

    return {
      artist,
      formatDate,
      getImage,
    };
  },
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

.custom-link-style a {
  color: blue; /* Ganti dengan warna yang Anda inginkan */
  text-decoration: none; /* Hapus garis bawah pada link */
}

.custom-link-style a:hover {
  color: rgb(211, 211, 211); /* Ganti dengan warna hover yang Anda inginkan */
  text-decoration: underline; /* Tambahkan underline saat di-hover */
}
</style>
