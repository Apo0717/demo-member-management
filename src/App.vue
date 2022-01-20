<template>
  <div>
    <nav-bar></nav-bar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import NavBar from "../src/components/NavBar.vue";
export default {
  name: "Home",
  components: { NavBar },
  setup() {
    const store = useStore();

    //++++++++++++++++++++++++++++
    //         Function
    //++++++++++++++++++++++++++++
    //*****召喚*****
    const callPeople = () => {
      store.dispatch("handPeople");
    };

    //++++++++++++++++++++++++++++
    //一開始跑的
    //++++++++++++++++++++++++++++
    onMounted(() => {
      callPeople();
    });

    return {};
  },
};
</script>
