import { createApp } from "vue";
import App from "./App.vue";
// import vuetify from './plugins/vuetify'; // Import Vuetify
import "./styles/main.scss";

import "vuetify/dist/vuetify.min.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createStore } from "vuex";

const vuetify = createVuetify({
  components,
  directives,
  // ssr: true,
});

const store = createStore({
  state: {
    name: "huynhngocphuc",
    tasks: [
      {
        id: 1,
        title: "Task 1",
        completed: false,
      },
    ],
  },
  getters:{
    getname: state => state.name,
  }
});
const app = createApp(App);

app.use(store);
app.use(vuetify);

app.mount("#app");
