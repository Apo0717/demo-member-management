<template>
  <div>
    <div>
      <div class="container">
        <div class="title">前端開發 人力仲介</div>
        <div class="people-wrap">
          <div class="info-box" v-for="(p, k) in pagePeople" :key="k">
            <div class="info-photo">
              <img :src="p.imgL" alt="大頭照" />
              <div class="sex">
                <div v-show="p.gender == 'female'" class="color venus">
                  <i class="fas fa-venus"></i>
                </div>
                <div v-show="p.gender == 'male'" class="color mars">
                  <i class="fas fa-mars"></i>
                </div>
              </div>
              <div class="info-name">{{ p.showName }}</div>
            </div>
            <div class="info-country">
              {{ p.showCountry }}<br />{{ p.showCity }}
            </div>
          </div>
        </div>
        <div class="page-num-area">
          <div
            class="btn-page"
            @click="changePage(nowP.val - 1)"
            v-show="nowP.val > 1"
          >
            上一頁
          </div>
          <div
            v-for="(n, kk) in pageNumArr"
            :key="kk"
            @click="changePage(n)"
            class="page-num"
          >
            {{ n }}
          </div>
          <div
            class="btn-page"
            @click="changePage(nowP.val + 1)"
            v-show="nowP.val < pageNum"
          >
            下一頁
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Home",
  components: {},
  setup() {
    const store = useStore();

    const nowP = reactive({
      val: 1,
    });

    //++++++++++++++++++++++++++++
    //         Computed
    //++++++++++++++++++++++++++++

    // 一頁要show的人
    const pagePeople = computed(() => {
      return store.getters["thisPageShow"];
    });

    // 頁碼陣列
    const pageNumArr = computed(() => {
      return store.getters["pageNumArr"];
    });

    // 總頁數
    const pageNum = computed(() => {
      return store.getters["pageNum"];
    });

    //++++++++++++++++++++++++++++
    //         Function
    //++++++++++++++++++++++++++++

    //*****換頁*****
    const changePage = (e) => {
      let pageA = store.getters["pageArr"];
      console.log(pageA, "pageA");
      let thisPageShow = pageA[e - 1][0];
      store.commit("getThisPageShow", { data: thisPageShow });

      nowP.val = e;
      console.log(nowP.val, "nowP");

      //頁碼不要變負數
      if (nowP.val < 1) {
        nowP.val = 1;
      }
      //頁碼不超過總頁碼
      let pageN = store.getters["pageNum"];
      if (nowP.val > pageN) {
        nowP.val = pageN;
      }
    };
    onMounted(() => {});
    return { pagePeople, pageNumArr, pageNum, changePage, nowP };
  },
};
</script>
