<template>
  <div>
    
    <div class="container">
      <div class="title">前端開發 人力仲介</div>
      <div class="people-wrap">
        <div class="info-box" v-for="(p, k) in pageData.thisPageShow" :key="k">
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
        <div class="btn-page" @click="changePage(pageData.nowP - 1)">
          上一頁
        </div>
        <div
          v-for="(n, kk) in pageData.pageNumArr"
          :key="kk"
          @click="changePage(n)"
          class="page-num"
        >
          {{ n }}
        </div>
        <div class="btn-page" @click="changePage(pageData.nowP + 1)">
          下一頁
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import NavBar from "../components/NavBar.vue";

// export default {
//   name: "MemberShow",
//   components: { NavBar },
//   props: { pageData: Object },
//   setup() {},
// };
</script>
