import { ref, onMounted, computed } from "vue";
import axios from "axios";

export function useDB() {
  const artworks = ref([]);
  const artists = ref([]);
  const exhibition = ref([]);

  const fetchArtworks = () => {
    axios
      .get("http://localhost:5000/artworks")
      .then((response) => {
        artworks.value = response.data;
      })
      .catch((error) => {
        console.error("There was an error fetching the artworks:", error);
      });
  };

  const fetchArtists = () => {
    axios
      .get("http://localhost:5000/artists")
      .then((response) => {
        artists.value = response.data;
      })
      .catch((error) => {
        console.error("There was an error fetching the artists:", error);
      });
  };

  const fetchExhibition = () => {
    axios
      .get("http://localhost:5000/exhibition")
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

  const getArtistName = (artistId) => {
    const artist = artists.value.find((artist) => artist.id === artistId);
    return artist ? artist.name : "Unknown Artist";
  };

  const getImage = (imagePath) => {
    return `http://localhost:5000/images/${imagePath}`;
  };

  const formatDateYear = (dateString) => {
    const date = new Date(dateString);
    return date.getFullYear();
  };

  const formatDateMonth = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "long" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  onMounted(() => {
    fetchArtworks();
    fetchArtists();
    fetchExhibition();
  });

  return {
    artworks,
    artists,
    exhibition,
    upcomingExhibitions,
    currentExhibitions,
    pastExhibitions,
    getArtistName,
    formatDateYear,
    formatDateMonth,
    getImage,
  };
}
