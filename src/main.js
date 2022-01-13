import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//記得npm下載 npm install --save axios vue-axios
import VueAxios from "vue-axios";
import axios from "axios";

//CSS
import "./assets/CSS/app.sass";

createApp(App).use(store).use(router).use(VueAxios, axios).mount("#app");
