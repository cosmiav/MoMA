import { ref, onBeforeMount, computed } from "vue";
import axios from "axios";

export function useDB() {
  const collection = ref([]);
  const artists = ref([]);
  const exhibition = ref([]);

  const baseUrl = "http://192.168.0.124:5000";
  //const baseUrl = "https://moma-five.vercel.app/";

  const fetchCollection = () => {
    return axios.get(`${baseUrl}/collection`);
  };

  const fetchArtists = () => {
    return axios.get(`${baseUrl}/artists`);
  };

  const fetchExhibition = () => {
    return axios.get(`${baseUrl}/exhibition`);
  };

  const loadData = async () => {
    try {
      const [collectionResponse, artistsResponse, exhibitionResponse] =
        await Promise.all([
          fetchCollection(),
          fetchArtists(),
          fetchExhibition(),
        ]);

      collection.value = collectionResponse.data;
      artists.value = artistsResponse.data;
      exhibition.value = exhibitionResponse.data;
    } catch (error) {
      console.error("There was an error fetching data:", error);
    }
  };

  onBeforeMount(loadData);

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
