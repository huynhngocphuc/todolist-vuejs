import { createApp } from "vue";
import App from "./App.vue";
// import vuetify from './plugins/vuetify'; // Import Vuetify
import "./styles/main.scss";

import "vuetify/dist/vuetify.min.css";

const app = createApp(App);

app.mount("#app");
