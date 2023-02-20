import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import "/scss/customize.css";
import "bootstrap/dist/css/bootstrap.css";

createApp(App).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
