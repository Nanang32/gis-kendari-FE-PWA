import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import globalComponents from "./global-components";
import utils from "./utils";
import axios from "axios";

import "./assets/css/app.css";

const app = createApp(App).use(router).use(createPinia());

globalComponents(app);
utils(app);
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL+'/api';

app.mount("#app");
