import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home.vue";
import Artists from "@/views/artists.vue";
import ArtistsPage from "@/components/artists/artistsPage.vue";
import Collection from "@/views/collection.vue";
import CollectionPage from "@/components/collection/collectionPage.vue";
import Exhibition from "@/views/exhibition.vue";
import Archive from "@/components/exhibition/archive.vue";
import ArtworkDetail from "../components/artworkDetail/artworkDetail.vue";
import ExhibitionDetail from "../components/exhibitionDetail/exhibitionDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/collection",
    name: "Collection",
    component: Collection,
  },
  {
    path: "/collection/:id",
    name: "CollectionPage",
    component: CollectionPage,
    props: true,
  },
  {
    path: "/artists",
    name: "Artists",
    component: Artists,
  },
  {
    path: "/artists/:id",
    name: "ArtistsPage",
    component: ArtistsPage,
    props: true,
  },
  {
    path: "/exhibition",
    name: "Exhibition",
    component: Exhibition,
  },
  {
    path: "/artwork/:id",
    name: "ArtworkDetail",
    component: ArtworkDetail,
    props: true,
  },
  {
    path: "/exhibition/:id",
    name: "ExhibitionDetail",
    component: ExhibitionDetail,
    props: true,
  },
  {
    path: "/exhibition/archive",
    name: "Archive",
    component: Archive,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
