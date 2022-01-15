<template>
  <div class="top-bar">
    <router-link to="/" class="logo">
      <img :src="require('@/assets/img/logo.png')" alt="logo" />
    </router-link>
    <div class="the-router-link">
      <router-link to="/" class="link-items">首頁</router-link>
      <span>|</span>
      <router-link to="admin" class="link-items">會員列表</router-link>
      <span>|</span>
      <router-link to="customer" class="link-items">自選清單</router-link>
    </div>
    <router-link to="login" class="logoin">登入</router-link>
  </div>
</template>
<script>
import { onMounted } from "vue";

export default {
  name: "NavBar",
  components: {},
  setup() {
    onMounted(() => {});

    return {};
  },
};
</script>
