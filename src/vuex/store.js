import { createStore } from "vuex";
import formInput from "./modules/formInput";

export default createStore({
  modules: {
    formInput,
  },
});
