import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import router from "./router";
import "./assets/custom.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");

AOS.init();
