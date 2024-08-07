import { createStore } from "vuex";
import formInput from "./modules/formInput";
import formEdit from "./modules/formEdit";
export default createStore({
  modules: {
    formInput,
    formEdit
  },
});
