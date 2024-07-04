<template>
  <div>
    <div v-if="artist">
      <div class="container pt-5">
        <div class="row my-3 my-md-5 justify-content-between">
          <div class="col-md-6 order-md-2">
            <img
              :src="getImage(artist.profile_picture)"
              alt="Artist Image"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6 align-self-center order-md-1">
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
                  b. {{ formatDateYear(artist.birthdate) }} <br />
                  d. {{ formatDateYear(artist.deathdate) }}
                </p>
              </div>
              <div class="col-12">
                <h6>Connect</h6>
                <p>
                  <a :href="artist.social">
                    {{ formatSocial(artist.social) }}</a
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
import { Globe } from "lucide-vue-next";

export default {
  setup() {
    const route = useRoute();
    const { artists, formatDateYear, getImage } = useDB();
    const artist = ref(null);
    const fetchArtist = (artistId) => {
      const foundArtist = artists.value.find(
        (a) => a.id.toString() === artistId.toString()
      );
      artist.value = foundArtist;
    };
    const formatSocial = (url) => {
      if (!url) return "";
      // Menghapus protokol
      let formattedUrl = url.replace(/^https?:\/\//, "");
      // Menghapus trailing slash jika tidak ada lanjutannya
      if (formattedUrl.endsWith("/")) {
        formattedUrl = formattedUrl.slice(0, -1);
      }
      return formattedUrl;
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
      formatDateYear,
      formatSocial,
      getImage,
    };
  },
  components: { Globe },
};
</script>

<style scoped>
h6 {
  text-transform: uppercase;
  font-weight: bold;
}

a:link {
  color: #111111;
  text-decoration: underline;
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
