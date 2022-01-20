import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/";

const routes = [
  // {
  //   // 重新導向，防止客戶亂輸入
  //   path: "*",
  //   redirect: "/#",
  // },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    // 登入頁
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "about" */ "../views/Login"),
  },
  {
    // 會員列表頁
    path: "/admin",
    name: "Admin",
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "about" */ "../views/Admin"),
  },
  {
    // 自選清單頁
    path: "/customer",
    name: "Customer",
    meta: { requiresAuth: true },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Customer")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
