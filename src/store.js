import { createStore } from "vuex";
import axios from "axios";

//const baseUrl = "http://192.168.0.124:5000";
const baseUrl = "https://moma-five.vercel.app/";

export default createStore({
  state: {
    collection: [],
    artists: [],
    exhibition: [],
  },
  mutations: {
    setCollection(state, data) {
      state.collection = data;
    },
    setArtists(state, data) {
      state.artists = data;
    },
    setExhibition(state, data) {
      state.exhibition = data;
    },
  },
  actions: {
    fetchCollection({ commit }) {
      axios
        .get(`${baseUrl}/collection`)
        .then((response) => {
          commit("setCollection", response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the artworks:", error);
        });
    },
    fetchArtists({ commit }) {
      axios
        .get(`${baseUrl}/artists`)
        .then((response) => {
          commit("setArtists", response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the artists:", error);
        });
    },
    fetchExhibition({ commit }) {
      axios
        .get(`${baseUrl}/exhibition`)
        .then((response) => {
          commit("setExhibition", response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the exhibition:", error);
        });
    },
  },
  getters: {
    upcomingExhibitions: (state) => {
      return state.exhibition.filter((item) => item.status === "upcoming");
    },
    currentExhibitions: (state) => {
      return state.exhibition.filter((item) => item.status === "current");
    },
    pastExhibitions: (state) => {
      return state.exhibition.filter((item) => item.status === "past");
    },
    photographyCollections: (state) => {
      return state.collection.filter((item) => item.term === "Photography");
    },
    sculptureCollections: (state) => {
      return state.collection.filter((item) => item.term === "Sculpture");
    },
    paintingCollections: (state) => {
      return state.collection.filter((item) => item.term === "Painting");
    },
    getArtistName: (state) => (artistId) => {
      const artist = state.artists.find((artist) => artist.id === artistId);
      return artist ? artist.name : "Unknown Artist";
    },
    getImage: (state) => (imagePath) => {
      return `${baseUrl}/${imagePath}`;
    },
    formatDateYear: () => (dateString) => {
      const date = new Date(dateString);
      const options = { day: "numeric", month: "long", year: "numeric" };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    },
    formatDateMonth: () => (dateString) => {
      const date = new Date(dateString);
      const options = { day: "numeric", month: "long" };
      return new Intl.DateTimeFormat("en-US", options).format(date);
    },
  },
});
