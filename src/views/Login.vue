<template>
  <div>
    <!-- <router-link to="/" class="logo">
      <img :src="require('@/assets/img/logo.png')" alt="logo" />
    </router-link>
    <label for="login">
      <div class="login" id="login">
        <input type="text" placeholder="電子郵件" v-model="user.email" />
        <input type="text" placeholder="密碼" v-model="user.passWord" />
        <div class="btn-submit">
          <input @submit.prevent="handleLogin()" type="submit" value="送出" />
          <button>清除</button>
        </div>
      </div>
    </label> -->
  </div>
</template>
<script>
// import { reactive, onMounted } from "vue";
// import { useRouter } from "vue-router";
// import apiHelper from "../utils/apiHelper";

// export default {
//   name: "LogIn",
//   components: {},
//   setup() {
//     const user = reactive({
//       email: "",
//       passWord: "",
//     });

//     //登入狀態
//     // const loginStatus = reactive({
//     //   val: false,
//     // });

//     const router = useRouter();

//     //登入判定
//     const handleLogin = () => {
//       let api = `${process.env.APIPATH}/admin/signin`;
//       apiHelper.post(api, user.email).then((res) => {
//         console.log(res.data, "登入ㄉ人");
//         //如果登入成功，路徑跳轉至Home
//         if (res.data.success) {
//           alert("登入成功");
//           router.push({ name: "Home" });
//         }
//       });
//     };

//     onMounted(() => {});

//     return { user, handleLogin };
//   },
// };
</script>
