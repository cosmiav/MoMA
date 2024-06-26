import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import router from "./router";
import "./assets/custom.scss";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
