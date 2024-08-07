import { createApp } from "vue";
import App from "./App.vue";
// import vuetify from './plugins/vuetify'; // Import Vuetify
import "./styles/main.scss";

import "@mdi/font/css/materialdesignicons.css";
import { createWebHistory, createRouter } from 'vue-router';
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/dist/vuetify.min.css";
import "vuetify/styles";
import About from "./component/pageRouter/About.vue";
import Home from "./component/pageRouter/Home.vue";
import store from "./vuex/store";

const vuetify = createVuetify({
  components,
  directives,
});

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App);

app.use(store);
app.use(vuetify);
app.use(router);

app.mount("#app");
