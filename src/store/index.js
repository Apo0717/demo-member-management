import { createStore } from "vuex";

//我拆
import state from "./state.js"; //狀態
import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";

export default createStore({
  state,
  actions,
  mutations,
  getters,
  modules: {},
});
