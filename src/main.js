import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//記得npm下載 npm install --save axios vue-axios
import VueAxios from "vue-axios";
import axios from "axios";
//前端 axios 請求附帶 Cookies 設定
// axios.defaults.withCredentials = true;

//CSS
import "./assets/CSS/app.sass";

// router.beforeEach((to, from, next) => {
//   console.log("to", to);
//   console.log("from", from);
//   console.log("next", next);
//   if (to.meta.requiresAuth) {
//     // 要到的頁面 (to)，它的 meta 如果有 requiresAuth 的話，就"不會"直接放行
//     console.log("這裡需要驗證");
//   } else {
//     // 反之，若沒有 requiresAuth 的話，就會直接放行
//     next();
//   }
// });

createApp(App).use(store).use(router).use(VueAxios, axios).mount("#app");
