<template>
  <div id="Admin">
    <div class="container">
      <div class="title">會員列表</div>
      <label for="member-list">
        <div class="filter-bar">
          <div>
            <!-- 選國籍 -->
            <select v-model="optionVal.country" @click="filterPeople()">
              <option value="全部國家">全部國家</option>
              <option v-for="(c, kk) in countryOption" :key="kk">
                {{ c }}
              </option>
            </select>

            <!-- 性別 -->
            <select v-model="optionVal.gender" @click="filterPeople()">
              <option value="全部性別">全部性別</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>{{ sumPeople }}</div>
        </div>

        <div class="admin-table">
          <div class="ad-th">
            <div class="th-name" v-for="(i, k) in adTh.items" :key="k">
              {{ i }}
            </div>
          </div>
          <div class="ad-tb" v-for="(i, k) in adminPageShow" :key="k">
            <div class="tb-name">
              <input type="checkbox" value="i.id.value" />
            </div>
            <div class="tb-name"><img :src="i.imgS" alt="大頭照" /></div>
            <div class="tb-name">{{ i.login.username }}</div>
            <div class="tb-name">{{ i.showName }}</div>
            <div class="tb-name">{{ i.gender }}</div>
            <div class="tb-name">{{ i.registered.age }}</div>
            <div class="tb-name">{{ i.showCountry }}</div>
            <div class="tb-name">{{ i.email }}</div>
            <div class="tb-name">
              <button class="btn-edit" @click="openClick(i)">編輯</button>
            </div>
          </div>
        </div>
        <!-- 彈出視窗 -->
        <div class="edit-wrap" v-show="editBox.click">
          <div class="p-info-title">編輯會員資料</div>
          <div class="p-info">
            <div class="left-photo">
              YOO
              <button class="btn-edit-photo">選擇檔案</button>
            </div>
            <div class="right-input">
              <!-- 名字 -->
              <div class="i-row">
                <div class="i-box">
                  First Name
                  <div>
                    <input type="text" />
                  </div>
                </div>
                <div class="i-box">
                  Last Name
                  <div>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <!-- 生日 -->
              <div class="i-row">
                <div class="i-box-all">
                  Birth
                  <div><input type="text" /></div>
                </div>
              </div>
              <!-- Email & 性別 -->
              <div class="i-row">
                <div class="i-box">
                  E-mail
                  <div><input type="text" /></div>
                </div>
                <div class="i-box">
                  Gender
                  <div>
                    <input type="radio" name="gender" :value="male" />Male
                    <input type="radio" name="gender" :value="female" />Female
                  </div>
                </div>
              </div>
              <!-- 國籍 & 種族 -->
              <div class="i-row">
                <div class="i-box">
                  Country
                  <div><input type="text" /></div>
                </div>
                <div class="i-box">
                  State
                  <div><input type="text" /></div>
                </div>
              </div>
              <!-- 城市 & 街 -->
              <div class="i-row">
                <div class="i-box">
                  City
                  <div><input type="text" /></div>
                </div>
                <div class="i-box">
                  Street
                  <div><input type="text" /></div>
                </div>
              </div>
              <!-- Number -->
              <div class="i-row">
                <div class="i-box-all">
                  Number
                  <div><input type="text" /></div>
                </div>
              </div>
              <!-- 座標 -->
              <div class="i-row">
                <div class="i-box">
                  Coordinates
                  <div><input type="text" /><input type="text" /></div>
                </div>
              </div>
              <div class="btn-wrap">
                <button class="btn-action" @click="submitClick()">確定</button>
                <button class="btn-action" @click="closeClick()">取消</button>
              </div>
            </div>
          </div>
        </div>
        <div class="member-list" id="member-list"></div>
      </label>
      <div class="page-num-area" v-show="pageNum > 1">
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
</template>
<script>
import { reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "Admin",
  components: {},
  setup() {
    const store = useStore();

    const optionVal = reactive({
      country: "全部國家",
      gender: "全部性別",
    });

    const adTh = reactive({
      items: [
        "自選清單",
        "照片",
        "帳號",
        "姓名",
        "性別",
        "年齡",
        "國籍",
        "電子郵件",
        "編輯",
      ],
    });

    const editBox = reactive({
      click: false,
      arr: {},
    });

    const nowP = reactive({
      val: 1,
    });

    //++++++++++++++++++++++++++++
    //         Computed
    //++++++++++++++++++++++++++++

    // 一頁要show的人
    const adminPageShow = computed(() => {
      return store.getters["adminThisPage"];
    });

    //所有國家
    const countryOption = computed(() => {
      return store.getters["countryOption"];
    });

    const sumPeople = computed(() => {
      let sum = store.getters["filterPeople"].length;
      return `共 : ${sum} 人`;
    });

    // 頁碼陣列
    const pageNumArr = computed(() => {
      return store.getters["adminPageNumArr"];
    });

    // 總頁數
    const pageNum = computed(() => {
      return store.getters["adminPageNum"];
    });

    //++++++++++++++++++++++++++++
    //         Function
    //++++++++++++++++++++++++++++

    //點擊三部曲*
    const openClick = (i) => {
      editBox.click = !editBox.click;
      editBox.arr = i;
      // console.log(i, "讓你看看我長怎樣");
    };

    const submitClick = () => {
      editBox.click = !editBox.click;
      editBox.arr = {};
    };

    const closeClick = () => {
      editBox.click = !editBox.click;
      editBox.arr = {};
    };

    //篩選人*
    const filterPeople = () => {
      let memberData = store.getters["memberData"];
      let newFilter = [];
      // let genderFilter = [];
      // let countryFilter = [];

      if (optionVal.country == "全部國家" && optionVal.gender == "全部性別") {
        console.log("全部選");
        store.commit("getFilterPeople", { data: memberData });
        store.dispatch("cutForAdmin");
      } else {
        newFilter = memberData.filter((people) => {
          console.log("普通選");
          return (
            people.showCountry == optionVal.country ||
            people.gender == optionVal.gender
          );
        });
        store.commit("getFilterPeople", { data: newFilter });
        store.dispatch("cutForAdmin");
      }
    };

    // 換頁*
    const changePage = (e) => {
      let pageA = store.getters["adminPageArr"];
      let thisPageShow = pageA[e - 1][0];
      store.commit("getAdminThisPage", { data: thisPageShow });

      nowP.val = e;
      console.log(nowP.val, "nowP");

      //頁碼不要變負數
      if (nowP.val < 1) {
        nowP.val = 1;
      }
      //頁碼不超過總頁碼
      let pageN = store.getters["adminPageNum"];
      if (nowP.val > pageN) {
        nowP.val = pageN;
      }
    };

    onMounted(() => {});

    return {
      optionVal,
      adTh,
      adminPageShow,
      countryOption,
      sumPeople,
      editBox,
      nowP,
      openClick,
      submitClick,
      closeClick,
      filterPeople,
      pageNumArr,
      pageNum,
      changePage,
    };
  },
};
</script>
