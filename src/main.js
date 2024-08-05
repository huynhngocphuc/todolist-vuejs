import { createApp } from "vue";
import App from "./App.vue";
// import vuetify from './plugins/vuetify'; // Import Vuetify
import "./styles/main.scss";

import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/dist/vuetify.min.css";
import "vuetify/styles";
import store from "./vuex/store";
import { createMemoryHistory, createRouter } from 'vue-router'
import FormInput from "./component/FormVuex/FormInput.vue"

const vuetify = createVuetify({
  components,
  directives,
});

const routes = [
  { path: '/', component: FormInput}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes: routes
})

const app = createApp(App);

app.use(store);
app.use(vuetify);
app.use(router)

app.mount("#app");
