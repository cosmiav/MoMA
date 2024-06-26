import { ref, onMounted, computed } from "vue";
import axios from "axios";

export function useDB() {
  const collection = ref([]);
  const artists = ref([]);
  const exhibition = ref([]);

  //const baseUrl = "http://localhost:5000";
  const baseUrl = "https://moma-five.vercel.app/";

  const fetchCollection = () => {
    axios
      .get(`${baseUrl}/collection`)
      .then((response) => {
        collection.value = response.data;
      })
      .catch((error) => {
        console.error("There was an error fetching the artworks:", error);
      });
  };

  const fetchArtists = () => {
    axios
      .get(`${baseUrl}/artists`)
      .then((response) => {
        artists.value = response.data;
      })
      .catch((error) => {
        console.error("There was an error fetching the artists:", error);
      });
  };

  const fetchExhibition = () => {
    axios
      .get(`${baseUrl}/exhibition`)
      .then((response) => {
        exhibition.value = response.data;
      })
      .catch((error) => {
        console.error("There was an error fetching the exhibition:", error);
      });
  };

  const upcomingExhibitions = computed(() => {
    return exhibition.value.filter((item) => item.status === "upcoming");
  });

  const currentExhibitions = computed(() => {
    return exhibition.value.filter((item) => item.status === "current");
  });

  const pastExhibitions = computed(() => {
    return exhibition.value.filter((item) => item.status === "past");
  });

  const photographyCollections = computed(() => {
    return collection.value.filter((item) => item.term === "Photography");
  });

  const sculptureCollections = computed(() => {
    return collection.value.filter((item) => item.term === "Sculpture");
  });

  const paintingCollections = computed(() => {
    return collection.value.filter((item) => item.term === "Painting");
  });

  const getArtistName = (artistId) => {
    const artist = artists.value.find((artist) => artist.id === artistId);
    return artist ? artist.name : "Unknown Artist";
  };

  const getImage = (imagePath) => {
    return `${baseUrl}/${imagePath}`;
  };

  const formatDateYear = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const formatDateMonth = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  onMounted(() => {
    fetchCollection();
    fetchArtists();
    fetchExhibition();
  });

  return {
    collection,
    artists,
    exhibition,
    upcomingExhibitions,
    currentExhibitions,
    pastExhibitions,
    photographyCollections,
    sculptureCollections,
    paintingCollections,
    getArtistName,
    formatDateYear,
    formatDateMonth,
    getImage,
  };
}
