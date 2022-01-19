<template>
  <div>
    <nav-bar></nav-bar>
    <!-- <member-show :pageData="pageData"></member-show> -->
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import NavBar from "../components/NavBar.vue";

import apiHelper from "../utils/apiHelper";
// import MemberShow from "../views/MemberShow.vue";

export default {
  name: "Home",
  components: { NavBar },
  setup() {
    // 所有被召喚的150人
    const memberData = reactive({
      arr: [],
    });

    // 一頁的人
    const pageData = reactive({
      arr: [], //被分頁後的資料
      thisPageShow: [], //一頁要秀的資料
      per: 20, //一頁幾筆
      nowP: 1, //當前頁
      pageNum: 0, //總頁數
      pageNumArr: [],
    });

    const p = pageData;

    //召喚********************
    const callPeople = () => {
      let handleArr = [];
      apiHelper.get(apiHelper.apiServers.url, "?results=150").then((res) => {
        console.log(res.results, "get");
        //處理簡化資料
        handleArr = res.results.map((e) => {
          return {
            ...e,
            showName: e.name.first + " " + e.name.last,
            imgL: e.picture.large,
            imgM: e.picture.medium,
            imgS: e.picture.thumbnail,
            showCountry: e.location.country,
            showCity: e.location.city,
          };
        });
        memberData.arr = handleArr;
        // console.log(memberData.arr, "這群人呢");
        dataCut();
      });
    };

    //切割資料********************
    const dataCut = () => {
      //幾頁
      let page = Math.ceil(memberData.arr.length / p.per);
      p.pageNum = page;

      //總頁碼

      p.pageNumArr = [];
      for (let i = 1; i <= p.pageNum; i++) {
        p.pageNumArr.push(i + " ");
      }

      //分頁顯示
      p.arr = [];
      for (let i = 0; i < page; i++) {
        p.arr[i] = [];
        p.arr[i].push(memberData.arr.slice(p.per * i, p.per * (i + 1)));
      }
      p.thisPageShow = p.arr[0][0];
    };

    //換頁********************
    const changePage = (e) => {
      p.thisPageShow = p.arr[e - 1][0];
      p.nowP = e;
      //頁碼不要變負數
      if (p.nowP < 1) {
        p.nowP = 1;
      }
      //頁碼不超過總頁碼
      if (p.nowP > p.pageNum) {
        p.nowP = p.pageNum;
      }
    };

    onMounted(() => {
      callPeople();
    });

    return { memberData, pageData, changePage };
  },
};
</script>
